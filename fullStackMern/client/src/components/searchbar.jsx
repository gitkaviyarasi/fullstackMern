function Searchbar() {
    const handleChangeSearch = () =>{
        console.log("hanlde book chnage")
    }

    const handlesubmit = () => {
        console.log("button submitted")
    }
    return (
        <>
    <div>
        <input type="text" name="searchbook" id="searchbook" onChange={handleChangeSearch}>
        </input>
        <button onClick={handlesubmit}>
            Search 
        </button>
    </div>
        </>
    )
}

export default Searchbar;