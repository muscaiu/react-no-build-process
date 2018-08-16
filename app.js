(() => {
    "use strict";

    const SizeSelector = (props) => {
        const sizeOptions = () => {
            const sizes = window.Inventory.allSizes;

            return sizes.map((num, i) => <option value={num} key={i}>{num}</option>)
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

    const ProductImage = (props) => {
        return <img src={`./assets/${props.color}.jpg`} alt="product image" />
    }

    const PruductCustomizer = (props) => {
        return (
            <div className="customizer">
                <div className="product-image" >
                    < ProductImage color="green" />
                    <div className="selectors" >
                        < SizeSelector size={8} />
                    </div>
                </div>
            </div>
        );
    }

    ReactDOM.render(
        <PruductCustomizer />,
        document.getElementById('react-root')
    );
})();
