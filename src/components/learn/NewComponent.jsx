const NewComponent = () => {
    const styleString = "Đây là 1 đoạn text";
    const styleNumber = 28;
    const styleBoolen = true;
    const styleArray = ['một', 'hai', 'ba', 4, 5];
    const styleObject = {
        name: 'phong',
        age: 28
    }
    return (
        <>
            <p>Đây là 1 đoạn string: {styleString}</p>
            <p>Đây là 1 number: {styleNumber}</p>
            <p>Đây là 1 boolen: {styleBoolen}</p>
            <p>Đây là 1 array: {JSON.stringify(styleArray)}</p>
            <p>Đây là 1 object:</p>
            <p>Name: {styleObject.name}</p>
            <p>Name: {styleObject.age}</p>

        </>
    );
}

export default NewComponent;