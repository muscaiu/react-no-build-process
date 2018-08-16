(() => {
    "use strict";

    const SizeSelector = (props) => {
        const sizeOptions = () => props.sizes.map((num, i) =>
            <option value={num} key={i}>{num}</option>)
        const handleChangeSize = (e) => props.onChangeSize(e.target.value)

        return (
            <div className="field-group">
                <label htmlFor="size-options">Size:</label>
                <select
                    defaultValue={props.defaultSize}
                    name="sizeOptions"
                    id="size-options"
                    onChange={handleChangeSize}
                >
                    {sizeOptions()}
                </select>
            </div>
        )
    }

    const ColorSelector = (props) => {
        const colorOptions = () => props.colors.map((name, i) =>
            <option value={name} key={i}>{name}</option>)
        const handleChangeColor = (e) => props.onChangeColor(e.target.value)

        return (
            <div className="field-group">
                <label htmlFor="color-options">Color:</label>
                <select
                    name="colorOptions"
                    id="color-options"
                    onChange={handleChangeColor}
                    defaultValue={props.defaultColor}
                >
                    {colorOptions()}
                </select>
            </div>
        )
    }

    const RefeshButton = (props) => {
        const handleRefresh = () => props.onRefresh()

        return (
            <button onClick={handleRefresh}>refresh</button>
        )
    }

    const ProductImage = (props) => <img src={`./assets/${props.color}.jpg`} alt="product image" />

    const PruductCustomizer = createReactClass({
        getInitialState: function () {
            return {
                color: "red",
                defaultColor: "red",
                size: 7,
                defaultSize: 7,
                sizes: window.Inventory.allSizes,
                colors: window.Inventory.allColors
            }
        },
        onChangeColor: function (selectedColor) {
            const avaiableSizes = window.Inventory.byColor[selectedColor]
            this.setState({
                sizes: avaiableSizes,
                color: selectedColor
            })

            if (avaiableSizes.indexOf(this.state.size) === -1) {
                console.log(
                    'size', this.state.size, 'not available in color', selectedColor,
                    'but it is available in size', avaiableSizes[0]
                );
                this.setState({ size: avaiableSizes[0] });
            }
        },
        onChangeSize: function (selectedSize) {
            const availableColors = window.Inventory.bySize[selectedSize];
            this.setState({
                colors: availableColors
            });

            if (availableColors.indexOf(this.state.color) === -1) {
                console.log(
                    'color', this.state.color, 'not available in size', selectedSize,
                    'but it is available in color', availableColors[0]
                );
                this.setState({ color: availableColors[0] });
            }
        },
        onRefresh: function () {
            this.setState({
                color: "red",
                defaultColor: "red",
                size: 7,
                defaultSize: 7,
                sizes: window.Inventory.allSizes,
                colors: window.Inventory.allColors
            })
        },
        render: function () {
            return (
                <div className="customizer">
                    <div className="product-image" >
                        < ProductImage color={this.state.color} />
                        <div className="selectors" >
                            < SizeSelector
                                size={this.state.size}
                                defaultSize={this.state.defaultSize}
                                sizes={this.state.sizes}
                                onChangeSize={this.onChangeSize}
                            />
                            < ColorSelector
                                color={this.state.color}
                                defaultColor={this.state.defaultColor}
                                colors={this.state.colors}
                                onChangeColor={this.onChangeColor}
                            />
                            <RefeshButton
                                onRefresh={this.onRefresh}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    })

    ReactDOM.render(
        <PruductCustomizer />,
        document.getElementById('react-root')
    );
})();
