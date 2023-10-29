import React, { useState } from "react";
import { Button, Icon, Confirm } from "semantic-ui-react";
import { Newsletter } from "../../../../api";
import { useAuth } from "../../../../hooks";
import "./EmailItem.scss";

const newsletterController = new Newsletter();

export function EmailItem(props) {
  const { email, onReload } = props;

  const [showConfirm, setShowConfirm] = useState(false);
  const { accessToken } = useAuth();

  const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);
  const onDelete = async () => {
    try {
      await newsletterController.deleteEmails(accessToken, email._id);

      onReload();

      onOpenCloseConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="email-item">
        <div className="email-item-info">
          <div className="email-item-text">
            <div className="email-name-box">
              <span>
                {email.firstname} {email.lastname}
              </span>
            </div>
            <div className="email-box">
              <span>Email: {email.email}</span>
            </div>
          </div>
          <div>
            <Button icon color="red" onClick={onOpenCloseConfirm}>
              <Icon name="trash" />
            </Button>
          </div>
        </div>
      </div>
      <Confirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={onDelete}
        content={`Eliminar al usuario: ${email.firstname} ${email.lastname} con email: ${email.email}`}
      />
    </>
  );
}
