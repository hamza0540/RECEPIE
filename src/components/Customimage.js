export default function CustomImage({imgSrc, pt})
{
    return(
        <div className="Custom-image" style={{paddingTop:pt}}>
            <img src={imgSrc} alt=""/>
        </div>
    )

}