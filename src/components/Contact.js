const Contact = () => {
    return (
        <div>
        <h1 className="font-bold text-center text-2xl" >This is the contact us page</h1>
        <form>
            <input type="text" className="m-2 p-2 bg-purple-700 rounded-md border-[1px]" placeholder="Name" />
            <input type="text" className="m-2 p-2 bg-purple-700 rounded-md border-[1px]" placeholder="Email"/>
            <button className="m-2 p-2 bg-purple-700 rounded-md border-[1px]">Submit</button>
        </form>
        </div>
    )
}

export default Contact;