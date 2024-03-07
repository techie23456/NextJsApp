const UsersPage = (props) =>{
    <div>
        <h1>Users Page (SSG)</h1>
        {props.data.users.map((user) =>(
            <li key={uder.id}>{user.firstname}</li>
        ))}
    </div>
}

export const getStaticProps = async () => {

    const data = await (await fetch("https://dummyjson.com/users"));
    return {
        props:
        data,
    }
}

export default UsersPage;