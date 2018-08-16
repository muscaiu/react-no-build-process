(function () {
    "use strict";

    function SizeSelector(props) {
        function sizeOptions() {
            var sizes = window.Inventory.allSizes;

            return sizes.map((num, i) => <option value={num} key={i}>{num}</option>)
        }
        return (
            <div className="field-group">
                <label htmlFor="size-options">Size:</label>
                <select name="sizeOptions" id="size-options">
                    {sizeOptions()}
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
                    < ProductImage color="red" />
                    <div className="selectors" >
                        < SizeSelector size="7" />
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
