export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },
        {
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const id = context.params.id

    return{
        props: {
            id: id
        }
    }
}

const User = ({ id }) => {

    return(
        <p>Id da página: {id}</p>
    )
}

export default User;
