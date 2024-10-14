document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = BigInt(document.getElementById('num1').value);
    const num2 = BigInt(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = (num1 + num2).toString();
            break;
        case 'sub':
            result = (num1 - num2).toString();
            break;
        case 'multi':
            result = (num1 * num2).toString();
            break;
        case 'divi':
            result = (num1 / num2).toString();
            break;
        case 'expo':
            result = BigInt(num1 ** Number(num2)).toString(); // This can only handle small exponents.
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});

document.getElementById('trigForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const angle = parseFloat(document.getElementById('angle').value);
    const trigOperation = document.getElementById('trigOperation').value;
    let trigResult;

    switch (trigOperation) {
        case 'cos':
            trigResult = Math.cos(angle).toFixed(4);
            break;
        case 'sin':
            trigResult = Math.sin(angle).toFixed(4);
            break;
        case 'tan':
            trigResult = Math.tan(angle).toFixed(4);
            break;
        default:
            trigResult = 'Invalid operation';
    }

    document.getElementById('trigResult').innerText = `Result: ${trigResult}`;
});
