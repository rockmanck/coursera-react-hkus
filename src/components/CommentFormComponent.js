import React, {useState} from "react";
import {Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {Control, Errors, LocalForm} from "react-redux-form";

function CommentForm(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    const submitComment = (values) => {
        props.addComment(props.dishId, values.rating, values.author, values.comment);
        toggle();
    };

    return (
        <div className="mt-1">
            <Button outline onClick={toggle}>
                <span className="fa fa-pencil fa-lg">Submit Comment</span>
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <LocalForm onSubmit={submitComment}>
                    <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Row className="form-group m-1">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select
                                model=".rating"
                                id="rating"
                                name="rating"
                                className="form-control"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                        </Row>
                        <Row className="form-group m-1">
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text
                                model=".author"
                                id="author"
                                name="author"
                                className="form-control"
                                placeholder="Your Name"
                                validators={{
                                    minLength: minLength(3),
                                    maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                                }}
                            />
                        </Row>
                        <Row className="form-group m-1">
                            <Label htmlFor="rating">Comment</Label>
                            <Control.textarea
                                model=".comment" id="comment" name="comment"
                                rows="6"
                                className="form-control"
                            />
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit">Submit</Button>
                    </ModalFooter>
                </LocalForm>
            </Modal>
        </div>
    );
}

export default CommentForm;