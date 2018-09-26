"use strict";

(function () {
    "use strict";

    var SizeSelector = function SizeSelector(props) {
        var sizeOptions = function sizeOptions() {
            return props.sizes.map(function (num, i) {
                return React.createElement(
                    "option",
                    { value: num, key: i },
                    num
                );
            });
        };
        var handleChangeSize = function handleChangeSize(e) {
            return props.onChangeSize(e.target.value);
        };

        return React.createElement(
            "div",
            { className: "field-group" },
            React.createElement(
                "label",
                { htmlFor: "size-options" },
                "Size:"
            ),
            React.createElement(
                "select",
                {
                    defaultValue: props.defaultSize,
                    name: "sizeOptions",
                    id: "size-options",
                    onChange: handleChangeSize
                },
                sizeOptions()
            )
        );
    };

    var ColorSelector = function ColorSelector(props) {
        var colorOptions = function colorOptions() {
            return props.colors.map(function (name, i) {
                return React.createElement(
                    "option",
                    { value: name, key: i },
                    name
                );
            });
        };
        var handleChangeColor = function handleChangeColor(e) {
            return props.onChangeColor(e.target.value);
        };

        return React.createElement(
            "div",
            { className: "field-group" },
            React.createElement(
                "label",
                { htmlFor: "color-options" },
                "Color:"
            ),
            React.createElement(
                "select",
                {
                    name: "colorOptions",
                    id: "color-options",
                    onChange: handleChangeColor,
                    defaultValue: props.defaultColor
                },
                colorOptions()
            )
        );
    };

    var RefeshButton = function RefeshButton(props) {
        var handleRefresh = function handleRefresh() {
            return props.onRefresh();
        };

        return React.createElement(
            "button",
            { onClick: handleRefresh },
            "refresh"
        );
    };

    var ProductImage = function ProductImage(props) {
        return React.createElement("img", { src: "./assets/" + props.color + ".jpg", alt: "product image" });
    };

    var PruductCustomizer = createReactClass({
        getInitialState: function getInitialState() {
            return {
                color: "red",
                defaultColor: "red",
                size: 7,
                defaultSize: 7,
                sizes: window.Inventory.allSizes,
                colors: window.Inventory.allColors
            };
        },
        onChangeColor: function onChangeColor(selectedColor) {
            var avaiableSizes = window.Inventory.byColor[selectedColor];
            this.setState({
                sizes: avaiableSizes,
                color: selectedColor
            });

            if (avaiableSizes.indexOf(this.state.size) === -1) {
                console.log('size', this.state.size, 'not available in color', selectedColor, 'but it is available in size', avaiableSizes[0]);
                this.setState({ size: avaiableSizes[0] });
            }
        },
        onChangeSize: function onChangeSize(selectedSize) {
            var availableColors = window.Inventory.bySize[selectedSize];
            this.setState({
                colors: availableColors
            });

            if (availableColors.indexOf(this.state.color) === -1) {
                console.log('color', this.state.color, 'not available in size', selectedSize, 'but it is available in color', availableColors[0]);
                this.setState({ color: availableColors[0] });
            }
        },
        onRefresh: function onRefresh() {
            this.setState({
                color: "red",
                defaultColor: "red",
                size: 7,
                defaultSize: 7,
                sizes: window.Inventory.allSizes,
                colors: window.Inventory.allColors
            });
        },
        render: function render() {
            return React.createElement(
                "div",
                { className: "customizer" },
                React.createElement(
                    "div",
                    { className: "product-image" },
                    React.createElement(ProductImage, { color: this.state.color }),
                    React.createElement(
                        "div",
                        { className: "selectors" },
                        React.createElement(SizeSelector, {
                            size: this.state.size,
                            defaultSize: this.state.defaultSize,
                            sizes: this.state.sizes,
                            onChangeSize: this.onChangeSize
                        }),
                        React.createElement(ColorSelector, {
                            color: this.state.color,
                            defaultColor: this.state.defaultColor,
                            colors: this.state.colors,
                            onChangeColor: this.onChangeColor
                        }),
                        React.createElement(RefeshButton, {
                            onRefresh: this.onRefresh
                        })
                    )
                )
            );
        }
    });

    ReactDOM.render(React.createElement(PruductCustomizer, null), document.getElementById('react-root'));
})();
//# sourceMappingURL=directory-dist.js.map