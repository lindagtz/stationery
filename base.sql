drop database pape;
create database pape;
	use pape;

	create table usuario(
		id_user int primary key auto_increment,
		nick varchar(25),
		direccion varchar(60),
		cp varchar(5),
		correo varchar(40),
		pass varchar(40)
		)engine=innodb;


	drop procedure inusuario;
	delimiter //
	create procedure inusuario(ni varchar(25),dir varchar(60),c_p varchar(5),corr varchar(40),passw varchar(40))
	begin
		insert into usuario values(null,ni,dir,c_p,corr,passw);
	end //
	delimiter ;


	drop procedure datusuario;
	delimiter //
	create procedure datusuario(ni varchar(25), passw varchar(40))
	begin
		select * from usuario where nick=ni and pass=passw;
		end //
	delimiter ;
	

	create table estado(
		id_estado int primary key auto_increment,
		nom_estado char(30)
		)engine=innodb;

	create table municipio(
		id_municipio int primary key auto_increment,
		nom_municipio char(30),
		id_estado int,
		foreign key (id_estado) references estado(id_estado) on delete cascade on update cascade
		)engine=innodb;

	create table colonia(
		id_colonia int primary key auto_increment,
		nom_colonia char(30),
		id_municipio int,
		foreign key (id_municipio) references municipio(id_municipio) on delete cascade on update cascade
		)engine=innodb;

	create table cp(
		id_cp int primary key auto_increment,
		cp char(30),
		id_colonia int,
		foreign key (id_colonia) references colonia(id_colonia) on delete cascade on update cascade
		)engine=innodb;

	create table prov(
		id_prov int primary key auto_increment,
		nombre char(30),
		empresa varchar(20),
		tel varchar(10),
		correo varchar(40),
		id_estado int,
		foreign key (id_estado) references estado(id_estado) on delete cascade on update cascade,
		id_municipio int,
		foreign key (id_municipio) references municipio(id_municipio) on delete cascade on update cascade,
		id_colonia int,
		foreign key (id_colonia) references colonia(id_colonia) on delete cascade on update cascade,
		id_cp int,
		foreign key (id_cp) references cp(id_cp) on delete cascade on update cascade
		)engine=innodb;


	create table producto(
		id_producto int primary key auto_increment,
		nom_producto varchar(30),
		precio_venta float(9,2),
		id_prov int,
		foreign key (id_prov) references prov(id_prov) on delete cascade on update cascade
		)engine=innodb;

	create table inventario(
		id_inventario int primary key auto_increment,
		id_producto int,
		foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade,
		cantidad int,
		fecha_inventario date
		)engine=innodb;
	
	create table compra(
		id_compra int primary key auto_increment,
		id_producto int,
		foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade,
		id_prov int,
		foreign key (id_prov) references prov(id_prov) on delete cascade on update cascade,
		precio_compra float(9,2),
		fecha_compra date
		)engine=innodb;

	

	create table venta(
		id_venta int primary key auto_increment,
		fecha_venta date,
		id_user int,
		foreign key (id_user) references usuario(id_user) on delete cascade on update cascade
		)engine=innodb;

	create table pedido(
		id_pedido int primary key auto_increment,
		fecha_pedido date,
		id_venta int,
		foreign key (id_venta) references venta(id_venta) on delete cascade on update cascade,
		id_producto int,
		foreign key (id_producto) references producto(id_producto) on delete cascade on update cascade
		)engine=innodb;


insert into estado values(1,'Mexico');
insert into estado values(2,'Tecamac');
insert into estado values(3,'Chihuahua');

insert into municipio values(1,'MuniMex 1',1);
insert into municipio values(2,'MuniMex 2',1);	
insert into municipio values(3,'MuniMex 3',1);
insert into municipio values(4,'MuniTec 1',2);	
insert into municipio values(5,'MuniTec 2',2);
insert into municipio values(6,'MuniTec 3',2);
insert into municipio values(7,'MuniChi 1',3);	
insert into municipio values(8,'MuniChi 2',3);
insert into municipio values(9,'MuniChi 3',3);

insert into colonia values(1,'Col 1 MuniMex 1',1);
insert into colonia values(2,'Col 2 MuniMex 1',1);
insert into colonia values(3,'Col 3 MuniMex 1',1);
insert into colonia values(4,'Col 1 MuniMex 2',2);
insert into colonia values(5,'Col 2 MuniMex 2',2);
insert into colonia values(6,'Col 3 MuniMex 2',2);
insert into colonia values(7,'Col 1 MuniMex 3',3);
insert into colonia values(8,'Col 2 MuniMex 3',3);
insert into colonia values(9,'Col 3 MuniMex 3',3);
insert into colonia values(10,'Col 1 MuniTec 1',4);
insert into colonia values(11,'Col 2 MuniTec 1',4);
insert into colonia values(12,'Col 3 MuniTec 1',4);
insert into colonia values(13,'Col 1 MuniTec 2',5);
insert into colonia values(14,'Col 2 MuniTec 2',5);
insert into colonia values(15,'Col 3 MuniTec 2',5);
insert into colonia values(16,'Col 1 MuniTec 3',6);
insert into colonia values(17,'Col 2 MuniTec 3',6);
insert into colonia values(18,'Col 3 MuniTec 3',6);
insert into colonia values(19,'Col 1 MuniChi 1',7);
insert into colonia values(20,'Col 2 MuniChi 1',7);
insert into colonia values(21,'Col 3 MuniChi 1',7);
insert into colonia values(22,'Col 1 MuniChi 2',8);
insert into colonia values(23,'Col 2 MuniChi 2',8);
insert into colonia values(24,'Col 3 MuniChi 2',8);
insert into colonia values(25,'Col 1 MuniChi 3',9);
insert into colonia values(26,'Col 2 MuniChi 3',9);
insert into colonia values(27,'Col 3 MuniChi 3',9);

insert into cp values(1,'CP 1 Col 1 MuniMex 1',1);
insert into cp values(2,'CP 2 Col 1 MuniMex 1',1);
insert into cp values(3,'CP 3 Col 1 MuniMex 1',1);
insert into cp values(4,'CP 1 Col 2 MuniMex 1',2);
insert into cp values(5,'CP 2 Col 2 MuniMex 1',2);
insert into cp values(6,'CP 3 Col 2 MuniMex 1',2);
insert into cp values(7,'CP 1 Col 3 MuniMex 1',3);
insert into cp values(8,'CP 2 Col 3 MuniMex 1',3);
insert into cp values(9,'CP 3 Col 3 MuniMex 1',3);
insert into cp values(10,'CP 1 Col 1 MuniMex 2',4);
insert into cp values(11,'CP 2 Col 1 MuniMex 2',4);
insert into cp values(12,'CP 3 Col 1 MuniMex 2',4);
insert into cp values(13,'CP 1 Col 2 MuniMex 2',5);
insert into cp values(14,'CP 2 Col 2 MuniMex 2',5);
insert into cp values(15,'CP 3 Col 2 MuniMex 2',5);
insert into cp values(16,'CP 1 Col 3 MuniMex 2',6);
insert into cp values(17,'CP 2 Col 3 MuniMex 2',6);
insert into cp values(18,'CP 3 Col 3 MuniMex 2',6);
insert into cp values(19,'CP 1 Col 1 MuniMex 3',7);
insert into cp values(20,'CP 2 Col 1 MuniMex 3',7);
insert into cp values(21,'CP 3 Col 1 MuniMex 3',7);
insert into cp values(22,'CP 1 Col 2 MuniMex 3',8);
insert into cp values(23,'CP 2 Col 2 MuniMex 3',8);
insert into cp values(24,'CP 3 Col 2 MuniMex 3',8);
insert into cp values(25,'CP 1 Col 3 MuniMex 3',9);
insert into cp values(26,'CP 2 Col 3 MuniMex 3',9);
insert into cp values(27,'CP 3 Col 3 MuniMex 3',9);

insert into cp values(28,'CP 1 Col 1 MuniTec 1',10);
insert into cp values(29,'CP 2 Col 1 MuniTec 1',10);
insert into cp values(30,'CP 3 Col 1 MuniTec 1',10);
insert into cp values(31,'CP 1 Col 2 MuniTec 1',11);
insert into cp values(32,'CP 2 Col 2 MuniTec 1',11);
insert into cp values(33,'CP 3 Col 2 MuniTec 1',11);
insert into cp values(34,'CP 1 Col 3 MuniTec 1',12);
insert into cp values(35,'CP 2 Col 3 MuniTec 1',12);
insert into cp values(36,'CP 3 Col 3 MuniTec 1',12);
insert into cp values(37,'CP 1 Col 1 MuniTec 2',13);
insert into cp values(38,'CP 2 Col 1 MuniTec 2',13);
insert into cp values(39,'CP 3 Col 1 MuniTec 2',13);
insert into cp values(40,'CP 1 Col 2 MuniTec 2',14);
insert into cp values(41,'CP 2 Col 2 MuniTec 2',14);
insert into cp values(42,'CP 3 Col 2 MuniTec 2',14);
insert into cp values(43,'CP 1 Col 3 MuniTec 2',15);
insert into cp values(44,'CP 2 Col 3 MuniTec 2',15);
insert into cp values(45,'CP 3 Col 3 MuniTec 2',15);
insert into cp values(46,'CP 1 Col 1 MuniTec 3',16);
insert into cp values(47,'CP 2 Col 1 MuniTec 3',16);
insert into cp values(48,'CP 3 Col 1 MuniTec 3',16);
insert into cp values(49,'CP 1 Col 2 MuniTec 3',17);
insert into cp values(50,'CP 2 Col 2 MuniTec 3',17);
insert into cp values(51,'CP 3 Col 2 MuniTec 3',17);
insert into cp values(52,'CP 1 Col 3 MuniTec 3',18);
insert into cp values(53,'CP 2 Col 3 MuniTec 3',18);
insert into cp values(54,'CP 3 Col 3 MuniTec 3',18);

insert into cp values(55,'CP 1 Col 1 MuniChi 1',19);
insert into cp values(56,'CP 2 Col 1 MuniChi 1',19);
insert into cp values(57,'CP 3 Col 1 MuniChi 1',19);
insert into cp values(58,'CP 1 Col 2 MuniChi 1',20);
insert into cp values(59,'CP 2 Col 2 MuniChi 1',20);
insert into cp values(60,'CP 3 Col 2 MuniChi 1',20);
insert into cp values(61,'CP 1 Col 3 MuniChi 1',21);
insert into cp values(62,'CP 2 Col 3 MuniChi 1',21);
insert into cp values(63,'CP 3 Col 3 MuniChi 1',21);
insert into cp values(64,'CP 1 Col 1 MuniChi 2',22);
insert into cp values(65,'CP 2 Col 1 MuniChi 2',22);
insert into cp values(66,'CP 3 Col 1 MuniChi 2',22);
insert into cp values(67,'CP 1 Col 2 MuniChi 2',23);
insert into cp values(68,'CP 2 Col 2 MuniChi 2',23);
insert into cp values(69,'CP 3 Col 2 MuniChi 2',23);
insert into cp values(70,'CP 1 Col 3 MuniChi 2',24);
insert into cp values(71,'CP 2 Col 3 MuniChi 2',24);
insert into cp values(72,'CP 3 Col 3 MuniChi 2',24);
insert into cp values(73,'CP 1 Col 1 MuniChi 3',25);
insert into cp values(74,'CP 2 Col 1 MuniChi 3',25);
insert into cp values(75,'CP 3 Col 1 MuniChi 3',25);
insert into cp values(76,'CP 1 Col 2 MuniChi 3',26);
insert into cp values(77,'CP 2 Col 2 MuniChi 3',26);
insert into cp values(78,'CP 3 Col 2 MuniChi 3',26);
insert into cp values(79,'CP 1 Col 3 MuniChi 3',27);
insert into cp values(80,'CP 2 Col 3 MuniChi 3',27);
insert into cp values(81,'CP 3 Col 3 MuniChi 3',27);

select * from estado;
select * from municipio;
select * from colonia;
select * from cp;


	drop procedure datosprov;
	delimiter //
	create procedure datosprov()
	begin
		select id_prov,nombre,empresa,tel,correo,nom_estado,nom_municipio,nom_colonia,cp from prov
		inner join estado on prov.id_estado=estado.id_estado
		inner join municipio on prov.id_municipio=municipio.id_municipio
		inner join colonia on prov.id_colonia=colonia.id_colonia
		inner join cp on prov.id_cp=cp.id_cp;
	end //
	delimiter ;

	drop procedure datosprovunico;
	delimiter //
	create procedure datosprovunico(id int)
	begin
		select id_prov,nombre,empresa,tel,correo,nom_estado,nom_municipio,nom_colonia,cp from prov
		inner join estado on prov.id_estado=estado.id_estado
		inner join municipio on prov.id_municipio=municipio.id_municipio
		inner join colonia on prov.id_colonia=colonia.id_colonia
		inner join cp on prov.id_cp=cp.id_cp
		where id_prov=id;
	end //
	delimiter ;

	drop procedure inprov;
	delimiter //
	create procedure inprov(nom varchar(30),emp varchar(20),tel varchar(10),corr varchar(40),id_es int,id_mun int,id_col int,id_c_p int)
	begin	
		insert into prov values(null,nom,emp,tel,corr,id_es,id_mun,id_col,id_c_p);
	end //
	delimiter ;

	drop procedure actprov;
	delimiter //
	create procedure actprov(id int,nom varchar(30),emp varchar(20),tell varchar(10),corr varchar(40),id_es int,id_mun int,id_col int,id_c_p int)
	begin	
		update prov set nombre=nom,empresa=emp,tel=tell,correo=corr,id_estado=id_es,id_municipio=id_mun,id_colonia=id_col,id_cp=id_c_p where id_prov=id;
	end //
	delimiter ;

	

--producto

drop procedure datosprod;
	delimiter //
	create procedure datosprod()
	begin
		select id_producto,nom_producto,precio_venta,empresa from producto inner join prov on producto.id_prov=prov.id_prov;
	end //
	delimiter ;

	drop procedure datosprodunico;
	delimiter //
	create procedure datosprodunico(id int)
	begin
		select id_producto,nom_producto,precio_venta,empresa from producto inner join prov on producto.id_prov=prov.id_prov where id_producto=id;
	end //
	delimiter ;

--in producto
	drop procedure inprod;
	delimiter //
	create procedure inprod(nom_p varchar(30),pre_vent double(9,2),id_p int)
	begin	
		insert into producto values(null,nom_p,pre_vent,id_p);
	end //
	delimiter ;

	drop procedure actprod;
	delimiter //
	create procedure actprod(id int,nom_p varchar(30),pre_vent double(9,2),id_p int)
	begin	
		update producto set nom_producto=nom_p,precio_venta=pre_vent,id_prov=id_p where id_producto=id;
	end //
	delimiter ;


call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);
call inprov('samm','samm','samm','samm',1,1,1,1);

call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);
call inprod('samm',4.5,3);




