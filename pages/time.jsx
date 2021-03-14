const Time = (props) => {
    
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    return(
        <>
            {dynamicDateString}
            {props.staticDateString}
        </>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Time;
