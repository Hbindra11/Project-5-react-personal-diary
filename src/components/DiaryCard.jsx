const DiaryCard = () => {

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Dairy Entry!</h2>
                    <div className="image-container">
                        <img src="https://api.lorem.space/image/album?w=400&h=225" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaryCard;