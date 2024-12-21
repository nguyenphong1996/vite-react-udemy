const SecondComponennt = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Doloribus neque ipsa a ab  \n reprehenderit expedita numquam nobis maiores culpa optio dolores
                dolorem aliquam rerum ad alias aliquid, sapiente reiciendis magni?</p>
        </>
    );
}

const ThirdComponennt = () => {
    return (
        <>
            <header>
                Đây là header
            </header>
            <div style={{ display: "flex" }} >
                <div style={{ flex: 3 }}>
                    <p> Đây là nội dung bên trái</p>
                </div >
                <div style={{ flex: 7 }}>
                    <p>Đây là nội dung bên phải</p>
                </div>
            </div>
            <div>
                Đây là chân trang
            </div>

        </>
    )
}

export { SecondComponennt, ThirdComponennt };