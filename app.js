(() => {
    "use strict";

    const SizeSelector = (props) => {
        const sizeOptions = () => {
            const sizes = window.Inventory.allSizes;

            return props.sizes.map((num, i) => <option value={num} key={i}>{num}</option>)
        }
        return (
            <div className="field-group">
                <label htmlFor="size-options">Size:</label>
                <select defaultValue={props.size} name="sizeOptions" id="size-options">
                    {sizeOptions()}
                </select>
            </div>
        )
    }

    const ColorSelector = (props) => {
        const colorOptions = () => {
            const colors = window.Inventory.allColors;

            return props.colors.map((name, i) => <option value={name} key={i}>{name}</option>)
        }
        return (
            <div className="field-group">
                <label htmlFor="color-options">Color:</label>
                <select defaultValue={props.color} name="colorOptions" id="color-options">
                    {colorOptions()}
                </select>
            </div>
        )
    }

    const ProductImage = (props) => {
        return <img src={`./assets/${props.color}.jpg`} alt="product image" />
    }

    const PruductCustomizer = createReactClass({
        getInitialState: function () {
            return {
                color: "red",
                size: 8,
                sizes: window.Inventory.allSizes,
                colors: window.Inventory.allColors
            }
        },

        render: function () {
            return (
                <div className="customizer">
                    <div className="product-image" >
                        < ProductImage color={this.state.color} />
                        <div className="selectors" >
                            < SizeSelector 
                                size={this.state.size} 
                                sizes={this.state.sizes} 
                            />
                            < ColorSelector 
                                color={this.state.color} 
                                colors={this.state.colors} 
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
