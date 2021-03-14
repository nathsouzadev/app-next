const Time = (props) => {
    
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    return(
        <>
            <p>{dynamicDateString}</p>
            <p>{props.staticDateString}</p>
        </>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Time;
