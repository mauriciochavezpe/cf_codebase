require('dotenv').config()
const appDebug = process.env.APP_DEBUG || true;
module.exports = (text, type) => {
    if (appDebug) {
        switch (type) {
            case 'error':
                console.error(text);
                break;
            default:
                console.log(text);
                break;
        }
    }
}