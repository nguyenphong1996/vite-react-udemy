const SecondComponennt = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, \n
                adipisicing elit. Doloribus neque ipsa a ab  \n reprehenderit expedita numquam nobis maiores culpa optio dolores
                dolorem aliquam rerum ad alias aliquid, sapiente reiciendis magni?</p>
        </div>
    );
}

const ThirdComponennt = () => {
    return (
        <div>
            <header>
                Đây là header
            </header>
            {/* <body style={"display: flex"} >
                <aside style={"flex: 3"}>
                    <p> Đây là nội dung bên trái</p>
                </aside >
                <article style={"flex: 7"}>
                    <p>Đây là nội dung bên phải</p>
                </article>
            </body> */}
            <footer>
                Đây là chân trang
            </footer>

        </div>
    )
}

export { SecondComponennt, ThirdComponennt };