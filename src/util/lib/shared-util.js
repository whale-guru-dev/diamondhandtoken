function valid(amount, decimals) {
    const regex = new RegExp(`^\\d+${decimals > 0 ? `(\\.\\d{1,${decimals}})?` : ''}$`);
    return regex.test(amount);
}

// eslint-disable-next-line no-shadow
function coins(units, decimals) {
    if (!valid(units, 0)) throw new Error('Invalid amount');
    // eslint-disable-next-line eqeqeq
    if (decimals == 0) return units;
    const s = units.padStart(1 + decimals, '0');
    return `${s.slice(0, -decimals)}.${s.slice(-decimals)}`;
}

// eslint-disable-next-line no-shadow
function units(coins, decimals) {
    if (!valid(coins, decimals)) throw new Error('Invalid amount');
    let i = coins.indexOf('.');
    if (i < 0) i = coins.length;
    const s = coins.slice(i + 1);
    return coins.slice(0, i) + s + '0'.repeat(decimals - s.length);
}

export function numberToBN(valueNumber, decimals) {
    const parsedNumber = valueNumber.toString();
    if (decimals === 18) {
        return units(parsedNumber, 18);
    }
    if (decimals === 8) {
        return units(parsedNumber, 8);
    }
    if (decimals === 6) {
        return units(parsedNumber, 6);
    }

    return 0;
}

export function BNtoNumber(valueNumber, decimals) {
    const parsedNumber = valueNumber.toString();
    if (decimals === 18) {
        return coins(parsedNumber, 18);
    }
    if (decimals === 8) {
        return coins(parsedNumber, 8);
    }
    if (decimals === 6) {
        return coins(parsedNumber, 6);
    }

    return '0';
}

const options = { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
};

export function numberWithCommas(num) {
    return Number(num).toLocaleString('en', options);
}