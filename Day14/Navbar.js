export function navbar(){
    const nav = document.createElement("div");
    nav.className="nav";
    const logo=document.createElement("div");
     logo.innerText="Logo";
     logo.style.fontSize="30px"
      logo.style.fontWeight="600"
     const Links=document.createElement("div");
     Links.className="link";
     const home=document.createElement("a");
      home.innerText="Home";
      const about=document.createElement("a");
      about.innerText="About";
      const Contact=document.createElement("a");
      Contact.innerText="Contact Us";
      const Blogs=document.createElement("a");
      Blogs.innerText="Blogs";

      Links.append(home,about,Contact,Blogs);

      nav.append(logo,Links);
      return nav;
}