import React, { useContext } from "react";
import "./comments.scss";
import { UserContext } from "../Context";

const Comment = comment => {
	const date = new Date(comment.comment.createdAt).toLocaleString();
	const { profile, handleAlert } = useContext(UserContext);

	return (
		<>
			{profile ? (
				<div
					aria-live="polite"
					aria-atomic="true"
					className="d-flex justify-content-start align-items-start w-100 mt-4"
				>
					{console.log(comment)}
					<div className="toast col-md-12">
						<div className="m-1  d-flex justify-content-start border-bottom">
							<p style={{ marginRight: 5, fontSize: 16, fontStyle: "italic" }}>Écrit par :</p>
							<p style={{ marginRight: 5, fontSize: 16, color: "red" }}>{comment.comment.User.username}</p>
							<p style={{ marginRight: 5, fontSize: 16, fontStyle: "italic" }}>le</p>
							<p style={{ fontSize: 16 }}><span>{date}</span></p>						
						</div>
						<div className="toast-body d-flex justify-content-start">
							<p className="toast-content d-flex justify-content-start" style={{ fontSize: 16 }}><span>{comment.comment.comments}</span></p>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
export default Comment;
