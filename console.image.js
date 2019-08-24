console.image = function (url, size = 0.3, returnText = undefined, covering = 'contain') {
    var image = new Image();
    image.src = url;
    image.onload = function () {
        var style = [
            `padding: ${this.height / 1 * size}px ${this.width / 1 * size}px;`,
            `background: url('${url}') no-repeat;`,
            `background-size: ${covering};`
        ].join(' ');
        console.log('%c ', style);
    };
    return returnText;
};
