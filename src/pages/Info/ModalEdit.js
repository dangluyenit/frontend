import React, { useState } from "react";
import { ButtonDone, Modal, ModalInfo, Table } from "./styles";
import { BsCalendarDate } from "react-icons/bs";
import { TbGenderBigender } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineDoneOutline,
} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalEdit = ({ onClose }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSex = (e) => {
    setSex(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleDob = (e) => {
    setDob(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.file);
  };
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const code = localStorage.getItem("code");
    const role = localStorage.getItem("role");
    console.log({ name, sex, dob, address, email, phone, image });

    axios
      .put(`http://localhost:4000/api/v1/${role}/${code}`, {
        name: name,
        sex: sex,
        phone: phone,
        dob: dob,
        address: address,
        email: email,
        image: image,
      })
      .then((response) => {
        console.log(response);
        navigate("/info");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            <input
              type="text"
              placeholder="Họ và tên"
              value={name}
              onChange={handleName}
            />
          </tr>
          <tr>
            <th>
              <BiPhone />
              Số điện thoại
            </th>
            <td>: </td>
            <input
              type="text"
              placeholder="Số điện thoại"
              value={phone}
              onChange={handlePhone}
            />
          </tr>
          <tr>
            <th>
              <BsCalendarDate />
              Ngày sinh
            </th>
            <td>: </td>
            <input
              type="date"
              placeholder="Ngày sinh"
              value={dob}
              onChange={handleDob}
            />
          </tr>
          <tr>
            <th>
              <TbGenderBigender />
              Giới tính
            </th>
            <td>: </td>
            <input
              type="text"
              placeholder="Giới tính"
              value={sex}
              onChange={handleSex}
            />
          </tr>
          <tr>
            <th>
              <FaAddressBook />
              Địa chỉ
            </th>
            <td>: </td>
            <input
              type="text"
              placeholder="Địa chỉ"
              value={address}
              onChange={handleAddress}
            />
          </tr>
          <tr>
            <th>
              <HiOutlineMail />
              Email
            </th>
            <td>: </td>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </tr>
          <tr>
            <th>
              <HiOutlineMail />
              Images
            </th>
            <td>: </td>
            <input type="file" placeholder="Images" onChange={handleImage} />
          </tr>
        </Table>
        <ButtonDone onClick={handleEdit}>
          Hoàn thành
          <MdOutlineDoneOutline />
        </ButtonDone>
        {/* <ButtonClose onClick={onClose}>
          Đóng
          <AiOutlineCloseCircle />
        </ButtonClose> */}
      </ModalInfo>
    </Modal>
  );
};

export default ModalEdit;
