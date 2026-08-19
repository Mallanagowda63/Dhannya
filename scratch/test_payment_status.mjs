async function testPaymentStatus() {
  const getRes = await fetch('http://localhost:3000/api/orders');
  const getJson = await getRes.json();
  console.log('Fetched orders count:', getJson.data.length);
  
  if (getJson.data.length > 0) {
    const firstOrder = getJson.data[0];
    console.log('Testing on Order ID:', firstOrder.id, 'Current Payment Method:', firstOrder.paymentMethod, 'Current Payment Status:', firstOrder.paymentStatus);
    
    const updateRes = await fetch(`http://localhost:3000/api/admin/orders/${firstOrder.id}/payment-status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentStatus: 'Paid' }),
    });
    
    const updateJson = await updateRes.json();
    console.log('Update Response:', updateJson);
  }
}

testPaymentStatus();
