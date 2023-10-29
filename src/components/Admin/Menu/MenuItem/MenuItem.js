import React, { useState } from "react";
import { Button, Icon, Confirm } from "semantic-ui-react";
import { BasicModal } from "../../../Shared/";
import { Menu } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { MenuForm } from "../MenuForm";
import "./MenuItem.scss";
import { blue } from "@mui/material/colors";

const menuController = new Menu();

export function MenuItem(props) {
  const { menu, onReload } = props;
  const { accessToken } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessagge, setConfirmMessagge] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const openUpdateMenu = () => {
    setTitleModal(`Update menu: ${menu.title}`);
    onOpenCloseModal();
  };

  const openDesactivateActiveConfirm = () => {
    setIsDelete(false);
    setConfirmMessagge(
      menu.active ? `Disable menu ${menu.title}` : `Activate menu ${menu.title}`
    );
    onOpenCloseConfirm();
  };

  const onActivateDesactivate = async () => {
    try {
      await menuController.updateMenu(accessToken, menu._id, {
        active: !menu.active,
      });
      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  const openDeleteConfirm = () => {
    setIsDelete(true);
    setConfirmMessagge(`Delete menu: ${menu.title}`);
    onOpenCloseConfirm();
  };

  const onDelete = async () => {
    try {
      await menuController.deleteMenu(accessToken, menu._id);
      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="menu-item">
        <div className="menu-item-info">
          <span className="menu-item-info-title">{menu.title}</span>
          <span className="menu-item-info-path">{menu.path}</span>
        </div>

        <div>
          <Button icon color="blue" onClick={openUpdateMenu}>
            <Icon name="pencil" />
          </Button>
          <Button
            icon
            color={menu.active ? "orange" : "teal"}
            onClick={openDesactivateActiveConfirm}
          >
            <Icon name={menu.active ? "ban" : "check"} />
          </Button>

          <Button icon color="red" onClick={openDeleteConfirm}>
            <Icon name="trash" />
          </Button>
        </div>
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
        <MenuForm onClose={onOpenCloseModal} onReload={onReload} menu={menu} />
      </BasicModal>

      <Confirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={isDelete ? onDelete : onActivateDesactivate}
        content={confirmMessagge}
        size="mini"
      />
    </>
  );
}