module.exports = (function () {

    function Binary(binaryString) {
        this.binaryString = binaryString;
    }

    Binary.prototype.binaryString = "";

    Binary.prototype.toDecimal = function () {
        if (this.isInvalidBinaryString(this.binaryString)) {
            return 0;
        }

        var tempbinaryString = this.binaryString;

        var result = 0;

        while (tempbinaryString.length > 0) {
            var char = tempbinaryString[0];

            var digit = parseInt(char)

            result += digit * Math.pow(2, tempbinaryString.length - 1);

            tempbinaryString = tempbinaryString.substr(1);
        }

        return result;
    }

    Binary.prototype.isInvalidBinaryString = function (binaryString) {

        var matches = binaryString.match(/[^10]*/g);

        for (var i = 0; i < matches.length; i++) {

            if (matches[i] != "") {
                return true;
            }
        }

        return false;
    }

    return Binary;
})();