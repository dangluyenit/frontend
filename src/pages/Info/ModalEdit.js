import React from "react";
import {
  ButtonClose,
  ButtonDone,
  Gender,
  Modal,
  ModalInfo,
  Table,
} from "./styles";
import { BsCalendarDate } from "react-icons/bs";
import { TbGenderBigender } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineDoneOutline,
} from "react-icons/md";
export default function ModalEdit({ visible, onClose }) {
  if (!visible) return null;
  return (
    <Modal>
      <ModalInfo>
        <Table>
          <tr>
            <th>
              <MdOutlineDriveFileRenameOutline />
              Họ và tên
            </th>
            <td>: </td>
            <input type="text" placeholder="Họ và tên" />
          </tr>
          <tr>
            <th>
              <BiPhone />
              Số điện thoại
            </th>
            <td>: </td>
            <input type="text" placeholder="Số điện thoại" />
          </tr>
          <tr>
            <th>
              <BsCalendarDate />
              Ngày sinh
            </th>
            <td>: </td>
            <input type="date" placeholder="Ngày sinh" />
          </tr>
          <tr>
            <th>
              <TbGenderBigender />
              Giới tính
            </th>
            <td>: </td>
            <Gender>
              <input type="radio" />
              Nam
              <input type="radio" />
              Nữ
            </Gender>
          </tr>
          <tr>
            <th>
              <FaAddressBook />
              Địa chỉ
            </th>
            <td>: </td>
            <input type="text" placeholder="Địa chỉ" />
          </tr>
          <tr>
            <th>
              <HiOutlineMail />
              Email
            </th>
            <td>: </td>
            <input type="text" placeholder="Email" />
          </tr>
        </Table>
        <ButtonDone>
          Hoàn thành
          <MdOutlineDoneOutline />
        </ButtonDone>
        <ButtonClose onClick={onClose}>
          Đóng
          <AiOutlineCloseCircle />
        </ButtonClose>
      </ModalInfo>
    </Modal>
  );
}
