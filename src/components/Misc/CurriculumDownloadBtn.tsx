export const CurriculumDownloadBtn = ({text}:{text:string}) => {
    let url = `${process.env.PUBLIC_URL}/lucas-silva-resume.pdf`

    return (
        <a href={url} download="lucas-silva-cv.pdf">
            {text}
        </a>
    );
};
