import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardHeader,
  Container,
  LeftInfo,
  RightInfo,
  Table,
  Button,
  Span,
} from "./styles";
import { BsCalendarDate } from "react-icons/bs";
import { TbGenderBigender } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiEditAlt } from "react-icons/bi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Info = () => {
  // const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    sex: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    image: "",
  });
  useEffect(() => {
    const code = localStorage.getItem("code");
    const role = localStorage.getItem("role");
    console.log(role);
    axios
      .get(`http://localhost:4000/api/v1/${role}/${code}`)
      .then((response) => {
        console.log(response.data.metadata);
        setInfo(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <LeftInfo>
        <CardHeader>
          <img className="profile_img" src={info.image} alt="" />
        </CardHeader>
        <CardBody>
          <Span>
            {localStorage.getItem("role") === "TEACHER"
              ? "Giáo viên"
              : "Sinh viên"}
          </Span>
        </CardBody>
      </LeftInfo>
      <RightInfo>
        <CardHeader>
          <h3>
            <i></i>Thông tin chung
          </h3>
        </CardHeader>
        <CardBody className="card-body">
          <Table>
            <tr>
              <th>
                <MdOutlineDriveFileRenameOutline />
                Họ và tên
              </th>
              <td>: </td>
              <td>{info.name}</td>
            </tr>
            <tr>
              <th>
                <BiPhone />
                Số điện thoại
              </th>
              <td>: </td>
              <td>{info.phone}</td>
            </tr>
            <tr>
              <th>
                <BsCalendarDate />
                Ngày sinh
              </th>
              <td>: </td>
              <td>{info.dob}</td>
            </tr>
            <tr>
              <th>
                <TbGenderBigender />
                Giới tính
              </th>
              <td>: </td>
              <td>{info.sex}</td>
            </tr>
            <tr>
              <th>
                <FaAddressBook />
                Địa chỉ
              </th>
              <td>: </td>
              <td>{info.address}</td>
            </tr>
            <tr>
              <th>
                <HiOutlineMail />
                Email
              </th>
              <td>: </td>
              <td>{info.email}</td>
            </tr>
          </Table>
        </CardBody>
        <Button onClick={() => navigate("/info/edit")}>
          Chỉnh sửa
          <BiEditAlt />
        </Button>
      </RightInfo>
    </Container>
  );
};

export default Info;
