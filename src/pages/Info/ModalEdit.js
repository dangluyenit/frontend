import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  ButtonClose,
  ButtonDone,
  Input,
  InputFile,
  Modal,
  ModalInfo,
  TableEdit,
  Td,
  Th,
  Tr,
} from "./styles";

import { BsCalendarDate, BsImage } from "react-icons/bs";
import { TbGenderBigender } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineDoneOutline,
} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalEdit = () => {
  const [values, setValues] = useState({
    name: "",
    sex: "",
    phone: "",
    dob: "",
    address: "",
    email: "",
    image: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    const code = localStorage.getItem("code");
    const role = localStorage.getItem("role");
    console.log(role);
    axios
      .get(`http://localhost:4000/api/v1/${role}/${code}`)
      .then((response) => {
        console.log(response.data.metadata);
        setValues({
          ...values,
          name: response.data.metadata.name,
          sex: response.data.metadata.sex,
          phone: response.data.metadata.phone,
          dob: response.data.metadata.dob,
          address: response.data.metadata.address,
          email: response.data.metadata.email,
          image: response.data.metadata.image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const code = localStorage.getItem("code");
    const role = localStorage.getItem("role");

    axios
      .put(`http://localhost:4000/api/v1/${role}/${code}`, values)
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
        <TableEdit>
          <Tr>
            <Th>
              <MdOutlineDriveFileRenameOutline />
              Họ và tên
            </Th>
            <Td>: </Td>
            <Input
              type="text"
              placeholder="Họ và tên"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </Tr>
          <Tr>
            <Th>
              <BiPhone />
              Số điện thoại
            </Th>
            <Td>: </Td>
            <Input
              type="text"
              placeholder="Số điện thoại"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </Tr>
          <Tr>
            <Th>
              <BsCalendarDate />
              Ngày sinh
            </Th>
            <Td>: </Td>
            <Input
              type="date"
              placeholder="Ngày sinh"
              value={values.dob}
              onChange={(e) => setValues({ ...values, dob: e.target.value })}
            />
          </Tr>
          <Tr>
            <Th>
              <TbGenderBigender />
              Giới tính
            </Th>
            <Td>: </Td>
            <Input
              type="text"
              placeholder="Giới tính"
              value={values.sex}
              onChange={(e) => setValues({ ...values, sex: e.target.value })}
            />
          </Tr>
          <Tr>
            <Th>
              <FaAddressBook />
              Địa chỉ
            </Th>
            <Td>: </Td>
            <Input
              type="text"
              placeholder="Địa chỉ"
              value={values.address}
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </Tr>
          <Tr>
            <Th>
              <HiOutlineMail />
              Email
            </Th>
            <Td>: </Td>
            <Input
              type="text"
              placeholder="Email"
              value={values.email}
              readOnly
            />
          </Tr>
          <Tr>
            <Th>
              <BsImage />
              Hình ảnh
            </Th>
            <Td>: </Td>
            <InputFile type="file" placeholder="Images" />
          </Tr>
        </TableEdit>
        <ButtonDone onClick={handleEdit}>
          Hoàn thành
          <MdOutlineDoneOutline />
        </ButtonDone>
        <ButtonClose onClick={() => navigate("/info")}>
          Đóng
          <AiOutlineCloseCircle />
        </ButtonClose>
      </ModalInfo>
    </Modal>
  );
};

export default ModalEdit;
