(function () {
    "use strict";

    function ProductImage(props) {
        return <img src="./assets/red.jpg" alt="product image" />)
    }

    function PruductCustomizer(props) {
        return (
            <div className="customizer">
                <div className="product-image" >
                    < ProductImage />
                </div>
            </div>
        );
    }

    ReactDOM.render(
        <PruductCustomizer />,
        document.getElementById('react-root')
    );
})();
