import assert from 'assert';

console.log('====================================================');
console.log('🌾 DHAANYA (ಧಾನ್ಯ) - MASTER AUTOMATED TEST SUITE');
console.log('====================================================\n');

const BASE_URL = 'http://localhost:3000';

async function runMasterTestSuite() {
  let passed = 0;
  let failed = 0;

  async function testStep(name, fn) {
    try {
      console.log(`▶ Running: ${name}...`);
      await fn();
      console.log(`  ✅ PASSED\n`);
      passed++;
    } catch (err) {
      console.error(`  ❌ FAILED: ${err.message}\n`);
      failed++;
    }
  }

  // --- TEST 1: Server & Static Assets Health ---
  await testStep('1. Server & Logo Asset Accessibility', async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.strictEqual(res.status, 200, 'Homepage should return 200 OK');
    
    const logoRes = await fetch(`${BASE_URL}/images/dhaanya-logo.jpg`);
    assert.strictEqual(logoRes.status, 200, 'Dhaanya logo asset should return 200 OK');
  });

  // --- TEST 2: Products Catalog API ---
  await testStep('2. Products Catalog API (/api/products)', async () => {
    const res = await fetch(`${BASE_URL}/api/products`);
    assert.strictEqual(res.status, 200, 'Products endpoint should return 200 OK');
    const json = await res.json();
    assert.strictEqual(json.success, true, 'Response success should be true');
    assert.ok(Array.isArray(json.data), 'Data should be an array');
    assert.ok(json.data.length > 0, 'Products catalog should contain items');
    console.log(`     Total catalog products retrieved: ${json.data.length}`);
  });

  // --- TEST 3: Categories & Custom Masalas API ---
  await testStep('3. Categories API (/api/categories)', async () => {
    const res = await fetch(`${BASE_URL}/api/categories`);
    assert.strictEqual(res.status, 200, 'Categories endpoint should return 200 OK');
    const json = await res.json();
    assert.strictEqual(json.success, true, 'Response success should be true');
    assert.ok(Array.isArray(json.data), 'Data should be an array');
  });

  // --- TEST 4: Coupon Validation API ---
  await testStep('4. Coupon Validation Engine (/api/coupons/validate)', async () => {
    // Valid coupon test
    const validRes = await fetch(`${BASE_URL}/api/coupons/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'DHAANYA10', cartSubtotal: 1000 }),
    });
    const validJson = await validRes.json();
    assert.strictEqual(validJson.success, true, 'DHAANYA10 should be valid');
    assert.strictEqual(validJson.data.discountPercent, 10, 'Should apply 10% discount');
    assert.strictEqual(validJson.data.discountAmount, 100, 'Discount amount on 1000 should be 100');

    // Invalid coupon test
    const invalidRes = await fetch(`${BASE_URL}/api/coupons/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'BOGUS99', cartSubtotal: 1000 }),
    });
    const invalidJson = await invalidRes.json();
    assert.strictEqual(invalidJson.success, false, 'Invalid coupon should be rejected');
  });

  // --- TEST 5: Orders & Payment Status Update API ---
  await testStep('5. Admin Order Payment Status Update (/api/admin/orders/:id/payment-status)', async () => {
    const getRes = await fetch(`${BASE_URL}/api/orders`);
    const getJson = await getRes.json();
    assert.ok(getJson.data.length > 0, 'Orders list should contain test orders');

    const testOrder = getJson.data[0];
    const newStatus = testOrder.paymentStatus === 'Paid' ? 'Pending' : 'Paid';

    const updateRes = await fetch(`${BASE_URL}/api/admin/orders/${testOrder.id}/payment-status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentStatus: newStatus }),
    });
    const updateJson = await updateRes.json();
    assert.strictEqual(updateJson.success, true, 'Payment status update should succeed');
    console.log(`     Updated Order ${testOrder.id} paymentStatus to: ${newStatus}`);
  });

  // --- TEST 6: Shipping Calculation & Free Threshold ---
  await testStep('6. Shipping Threshold Calculation', async () => {
    const calcShipping = (subtotal) => (subtotal >= 499 || subtotal === 0 ? 0 : 49);
    assert.strictEqual(calcShipping(300), 49, 'Orders under 499 incur Rs. 49 shipping');
    assert.strictEqual(calcShipping(500), 0, 'Orders 499+ qualify for FREE shipping');
  });

  console.log('====================================================');
  console.log(`📊 MASTER TEST RESULTS: ${passed} PASSED / ${failed} FAILED`);
  console.log('====================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runMasterTestSuite();
