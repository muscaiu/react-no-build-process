(function () {
    "use strict";

    function SizeSelector(props) {
        return (
            <div className="field-group">
                <label htmlFor="size-options">Size:</label>
                <select name="sizeOptions" id="size-options">
                    <option>7</option>
                    <option>7.5</option>
                    <option>9</option>
                </select>
            </div>
        )
    }

    function ProductImage(props) {
        return <img src="./assets/red.jpg" alt="product image" />
    }

    function PruductCustomizer(props) {
        return (
            <div className="customizer">
                <div className="product-image" >
                    < ProductImage />
                    <div className="selectors" >
                        < SizeSelector />
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
