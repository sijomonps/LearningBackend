import path from 'path'

export const getHome = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "index.html"))
};

export const getAbout = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "about.html"))
};

export const getContact = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "contact.html"))
};
