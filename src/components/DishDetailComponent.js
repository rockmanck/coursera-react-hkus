import React from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Link, useParams} from "react-router-dom";
import CommentForm from "./CommentFormComponent";
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

function DishDetail(props) {
    const renderDish = (dish, isLoading, errMess) => {
        if (isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>errMess</h4>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    };

    const renderComments = (comments, addComment, dishId) => {
        const commentsBlock = comments.map((c) => {
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
            <div key={'commentFor-'} className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>
                            {commentsBlock}
                        </CardText>
                    </CardBody>
                </Card>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    };
    const {dishId} = useParams();
    const id = parseInt(dishId);
    const dish = props.dishes.dishes.filter((d) => d.id === id)[0];
    const comments = props.comments.filter((c) => c.dishId === id);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {dish.name}
                    </BreadcrumbItem>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                    </div>
                </Breadcrumb>
            </div>
            <div className="row">
                {renderDish(dish, props.isLoading, props.errMess)}
                {renderComments(comments, props.addComment, id)}
            </div>
        </div>
    );
}

export default DishDetail;