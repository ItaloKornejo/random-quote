import React from 'react'

const Footer = () => {

    const handleRepo = () => {
        window.open('https://github.com/ItaloKornejo/w1-work', "_blank");
    }

  return (
    <div className='github_icon'>
        <a className='repo_icon' onClick={handleRepo}>
            <i className='bx bxl-github' ></i>
            <span>Repository</span>
        </a>
    </div>
  )
}

export default Footer