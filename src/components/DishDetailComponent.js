import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function DishDetail(props) {
    const renderDish = (dish) => {
        if (dish != null) {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return <div></div>;
        }
    };

    const renderComments = (dish) => {
        if (dish != null) {
            const comments = dish.comments.map((c) => {
                return (
                    <div key={'comment-' + c.id}>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, {new Intl.DateTimeFormat(
                            'en-US',
                            {year: 'numeric', month: 'short', day: '2-digit'})
                            .format(new Date(Date.parse(c.date)))}</p>
                    </div>
                )
            });

            return (
                <div key={'commentFor-' + dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText>
                                {comments}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return <div></div>;
        }
    };

    return (
        <div className="container">
            <div className="row">
                {renderDish(props.selected)}
                {renderComments(props.selected)}
            </div>
        </div>
    );
}

export default DishDetail;