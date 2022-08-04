export default function Card(props) {
    const { imageSrc, imageAlt } = props;

    return (
        <div className="card">
            {imageSrc && <img src={imageSrc} className="card-img-top" alt={imageAlt} />}
            <div className="card-body">
                {props.children.map(item => item)}
            </div>
        </div>
    )
}