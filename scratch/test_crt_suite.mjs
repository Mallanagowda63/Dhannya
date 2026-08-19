import assert from 'assert';

console.log('🧪 Starting Test Suite 4: Cart & Coupon Management (CRT)...\n');

async function runCrtTestSuite() {
  let passed = 0;
  let total = 4;

  // --- CRT-001: Cart Item Quantity Adjustment & Subtotal Calculation ---
  try {
    console.log('▶ Running CRT-001: Cart Item Quantity Adjustment & Subtotal Calculation...');
    const item1 = { id: 'ci-1', price: 399, quantity: 1 };
    const item2 = { id: 'ci-2', price: 200, quantity: 2 };
    let cart = [item1, item2];

    // Initial subtotal: 399*1 + 200*2 = 799
    let subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
    assert.strictEqual(subtotal, 799, 'Initial subtotal should be 799');

    // Increase qty of item1 (+1) -> qty = 2 (399*2 + 200*2 = 1198)
    item1.quantity += 1;
    subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
    assert.strictEqual(subtotal, 1198, 'Updated subtotal should be 1198');

    // Decrease qty of item2 (-1) -> qty = 1 (399*2 + 200*1 = 998)
    item2.quantity -= 1;
    subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
    assert.strictEqual(subtotal, 998, 'Updated subtotal should be 998');

    // Remove item1
    cart = cart.filter(i => i.id !== 'ci-1');
    subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
    assert.strictEqual(subtotal, 200, 'Subtotal after removing item1 should be 200');

    console.log('✅ CRT-001 Passed!');
    passed++;
  } catch (err) {
    console.error('❌ CRT-001 Failed:', err.message);
  }

  // --- CRT-002: Valid Coupon Application (DHAANYA10) ---
  try {
    console.log('\n▶ Running CRT-002: Valid Coupon Application (DHAANYA10)...');
    const res = await fetch('http://localhost:3000/api/coupons/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'DHAANYA10', cartSubtotal: 500 }),
    });
    const data = await res.json();
    assert.strictEqual(data.success, true, 'Response success should be true');
    assert.strictEqual(data.data.code, 'DHAANYA10', 'Coupon code should be DHAANYA10');
    assert.strictEqual(data.data.discountPercent, 10, 'Discount percentage should be 10');
    assert.strictEqual(data.data.discountAmount, 50, 'Discount amount on 500 should be 50');
    console.log('✅ CRT-002 Passed!');
    passed++;
  } catch (err) {
    console.error('❌ CRT-002 Failed:', err.message);
  }

  // --- CRT-003: Invalid / Expired Coupon (EXPIRED99) ---
  try {
    console.log('\n▶ Running CRT-003: Invalid / Expired Coupon (EXPIRED99)...');
    const res = await fetch('http://localhost:3000/api/coupons/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'EXPIRED99', cartSubtotal: 500 }),
    });
    const data = await res.json();
    assert.strictEqual(data.success, false, 'Response success should be false for invalid coupon');
    assert.strictEqual(data.message, 'Invalid or inactive coupon code', 'Error message should match');
    console.log('✅ CRT-003 Passed!');
    passed++;
  } catch (err) {
    console.error('❌ CRT-003 Failed:', err.message);
  }

  // --- CRT-004: Free Shipping Threshold Logic ---
  try {
    console.log('\n▶ Running CRT-004: Free Shipping Threshold Logic...');
    const calcShipping = (subtotal) => (subtotal >= 499 || subtotal === 0 ? 0 : 49);

    assert.strictEqual(calcShipping(350), 49, 'Shipping should be 49 for subtotal 350');
    assert.strictEqual(calcShipping(499), 0, 'Shipping should be FREE (0) for subtotal 499');
    assert.strictEqual(calcShipping(750), 0, 'Shipping should be FREE (0) for subtotal 750');
    assert.strictEqual(calcShipping(0), 0, 'Shipping should be 0 for empty cart (0)');

    console.log('✅ CRT-004 Passed!');
    passed++;
  } catch (err) {
    console.error('❌ CRT-004 Failed:', err.message);
  }

  console.log(`\n🎉 Test Suite 4 Execution Complete: ${passed}/${total} Test Cases Passed!`);
}

runCrtTestSuite();
