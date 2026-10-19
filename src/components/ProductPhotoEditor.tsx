import React from 'react';
import { X } from 'lucide-react';

export const MAX_PRODUCT_IMAGES = 10;

// Downscale an uploaded photo to at most 1200px on its longest side as a JPEG data URL,
// so several photos fit comfortably in one request.
const resizeImageFile = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onloadend = () => {
      const rawDataUrl = reader.result as string;
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, 1200 / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve(rawDataUrl);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => resolve(rawDataUrl);
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  });

// Ordered photo picker for the admin product forms: index 0 is the main/banner image.
// Holds existing photo URLs and newly picked photos (as data URLs) side by side.
export const ProductPhotoEditor: React.FC<{
  images: string[];
  onChange: (images: string[]) => void;
  onError: (message: string) => void;
}> = ({ images, onChange, onError }) => {
  const addFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const room = MAX_PRODUCT_IMAGES - images.length;
    if (room <= 0) {
      onError(`You can add up to ${MAX_PRODUCT_IMAGES} photos.`);
      return;
    }
    const picked = Array.from(files).filter((f) => f.type.startsWith('image/')).slice(0, room);
    try {
      const resized = await Promise.all(picked.map(resizeImageFile));
      onChange([...images, ...resized]);
    } catch {
      onError('Could not read one of the selected photos.');
    }
  };

  const move = (from: number, to: number) => {
    if (to < 0 || to >= images.length) return;
    const next = [...images];
    const [img] = next.splice(from, 1);
    next.splice(to, 0, img);
    onChange(next);
  };

  const smallButton = 'bg-white/90 hover:bg-white text-earth text-[10px] font-bold rounded-md cursor-pointer';

  return (
    <div>
      <label className="block text-xs font-bold text-stone-700 uppercase mb-1 flex items-center justify-between">
        <span>Product Photos ({images.length}/{MAX_PRODUCT_IMAGES})</span>
        <span className="text-[10px] text-olive font-extrabold lowercase">(JPG, PNG, WEBP)</span>
      </label>
      <label className="block bg-[#faf8f4] border border-dashed border-stone-300 hover:border-olive rounded-xl p-3.5 text-center cursor-pointer transition">
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = '';
          }}
        />
        <div className="text-xs text-stone-600 font-medium">
          📁 <strong className="text-earth font-bold">Click here to select photos</strong> (you can pick several at once)
        </div>
        <div className="text-[11px] text-stone-500 mt-1">
          The 1st photo is the main banner image shown first on the shop and product page.
        </div>
      </label>

      {images.length > 0 && (
        <div className="grid grid-cols-4 gap-2 mt-3">
          {images.map((src, idx) => (
            <div
              key={`${idx}-${src.slice(-24)}`}
              className={`relative rounded-xl overflow-hidden border-2 ${idx === 0 ? 'border-olive col-span-2 row-span-2' : 'border-stone-200'}`}
            >
              <img src={src} alt={`Product photo ${idx + 1}`} className="w-full h-full object-cover aspect-square" />
              <span className="absolute top-1 left-1 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                {idx === 0 ? 'Main banner' : idx + 1}
              </span>
              <div className="absolute bottom-1 inset-x-1 flex justify-between gap-1">
                {idx > 0 ? (
                  <button type="button" title="Set as main banner" onClick={() => move(idx, 0)} className={`${smallButton} px-1.5 py-0.5`}>
                    ★ Main
                  </button>
                ) : (
                  <span />
                )}
                <div className="flex gap-1">
                  {idx > 0 && (
                    <button type="button" title="Move left" onClick={() => move(idx, idx - 1)} className={`${smallButton} w-5 h-5`}>
                      ‹
                    </button>
                  )}
                  {idx < images.length - 1 && (
                    <button type="button" title="Move right" onClick={() => move(idx, idx + 1)} className={`${smallButton} w-5 h-5`}>
                      ›
                    </button>
                  )}
                  <button
                    type="button"
                    title="Remove photo"
                    onClick={() => onChange(images.filter((_, i) => i !== idx))}
                    className="bg-white/90 hover:bg-red-50 text-red-600 w-5 h-5 rounded-md flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
