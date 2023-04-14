import React, { useState } from "react";
import {
  CardBody,
  CardHeader,
  Container,
  LeftInfo,
  RightInfo,
  Table,
  Button,
} from "./styles";
import { BsCalendarDate } from "react-icons/bs";
import { TbGenderBigender } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiEditAlt } from "react-icons/bi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import ModalEdit from "./ModalEdit";

const Info = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <Container>
      <LeftInfo>
        <CardHeader>
          <img
            className="profile_img"
            src="https://source.unsplash.com/600x300/?student"
            alt="student dp"
          />
        </CardHeader>
        <CardBody>
          <input type="file"></input>
        </CardBody>
      </LeftInfo>
      <RightInfo>
        <CardHeader>
          <h3>
            <i></i>Thông tin chung
          </h3>
        </CardHeader>
        <CardBody class="card-body">
          <Table>
            <tr>
              <th>
                <MdOutlineDriveFileRenameOutline />
                Họ và tên
              </th>
              <td>: </td>
              <td>Đặng Ngọc Luyến</td>
            </tr>
            <tr>
              <th>
                <BiPhone />
                Số điện thoại
              </th>
              <td>: </td>
              <td>0977715564</td>
            </tr>
            <tr>
              <th>
                <BsCalendarDate />
                Ngày sinh
              </th>
              <td>: </td>
              <td>24/03/2000</td>
            </tr>
            <tr>
              <th>
                <TbGenderBigender />
                Giới tính
              </th>
              <td>: </td>
              <td>Nam</td>
            </tr>
            <tr>
              <th>
                <FaAddressBook />
                Địa chỉ
              </th>
              <td>: </td>
              <td>Nha Trang Khánh Hoà </td>
            </tr>
            <tr>
              <th>
                <HiOutlineMail />
                Email
              </th>
              <td>: </td>
              <td>dnluyenit2@gmail.com</td>
            </tr>
          </Table>
        </CardBody>
        <Button onClick={() => setShowModal(true)}>
          Chỉnh sửa
          <BiEditAlt />
        </Button>
      </RightInfo>
      <ModalEdit onClose={handleClose} visible={showModal} />
    </Container>
  );
};

export default Info;
