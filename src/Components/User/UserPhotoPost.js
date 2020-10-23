import React, { useState } from "react";
import Input from "../../Components/Inputs/Inputs";
import Button from "../Buttons/Buttons";
import useForm from "../../Hooks/useForm";
import { PHOTO_POST } from "../../services/apiUrl";
import useFetch from "../../Hooks/useFetch";
import { PhotoPost, Preview } from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  };
  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <PhotoPost>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button disabled={loading ? true : false}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
      <div>
        {img.preview && (
          <Preview style={{ backgroundImage: `url(${img.preview})` }}></Preview>
        )}
      </div>
    </PhotoPost>
  );
};

export default UserPhotoPost;
