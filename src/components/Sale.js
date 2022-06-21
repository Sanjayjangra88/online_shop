import React from 'react'

function Sale() {
  return (
    <div>
      <div id="navbar" className="uk-navbar-container" uk-sticky>
            <div className="uk-container uk-container">
                <div className="uk-navbar">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item">
                            <a style="color: Red; font-size: 30px;" href="">Title or Logo</a>
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@s ">
                            <li className="active"><a href=""><i className="fa fa-home fa-fw mr-1"></i>Home</a></li>
                            <li><a href=""><i className="fa fa-info-circle fa-fw mr-1"></i>About</a></li>
                            <li><a href=""><i className="fa fa-th-list fa-fw mr-1"></i>Blog</a></li>
                            <li><a href=""><i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact</a></li>
                            <li><a href=""><i className="fa fa-user-plus fa-fw mr-1"></i>Register</a></li>
                            <li><a href=""><i className="fa fa-sign-in fa-fw mr-1"></i>Log In</a></li>
                            <li><a className="uk-navbar-toggle" href="#modal-full" uk-search-icon uk-toggle></a></li> 
                        </ul>
                        <a className="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>
                    </div>
                    <div id="modal-full" className="uk-modal-full uk-modal" uk-modal>
                        <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" uk-height-viewport>
                            <button className="uk-modal-close-full" type="button" uk-close></button>
                            <form className="uk-search uk-search-large">
                                <input className="uk-search-input uk-text-center" type="search" placeholder="Search" autofocus/>
                            </form>
                        </div>
                    </div>
                    <div id="offcanvas" className=""  uk-offcanvas="flip: true; overlay: false; mode: slide;" aria-hidden="true">
                        <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close></button>
                                <ul className="uk-nav uk-nav-offcanvas ">
                                    <li className="active"><a href=""><i className="fa fa-home fa-fw mr-1"></i>Home</a></li>
                                    <li><a href=""><i className="fa fa-info-circle fa-fw mr-1"></i>About</a></li>
                                    <li><a href=""><i className="fa fa-th-list fa-fw mr-1"></i>Blog</a></li>
                                    <li><a href=""><i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact</a></li>
                                    <li><a href=""><i className="fa fa-user-plus fa-fw mr-1"></i>Register</a></li>
                                    <li><a href=""><i className="fa fa-sign-in fa-fw mr-1"></i>Log In</a></li>
                                    <li><a className="uk-navbar-toggle" href="#modal-full" uk-search-icon uk-toggle></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Sale
