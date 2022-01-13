var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
	user: "serwer72845",
	// Password optional, prompted if none given
	password: "c4e8b9db",
	host: "serwer72845.lh.pl",
	port: 21,
	localRoot: __dirname + "/dist",
	remoteRoot: "/public_html/webportal",
	// include: ["*", "**/*"],      // this would upload everything except dot files
	include: ["*.*"],
	// e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
	// delete ALL existing files at destination before uploading, if true
	deleteRemote: false,
	// Passive mode is forced (EPSV command is not sent)
	forcePasv: true,
	// use sftp or ftp
	sftp: false
};

ftpDeploy
	.deploy(config)
	.then(res => console.log("finished:", res))
	.catch(err => console.log(err));
