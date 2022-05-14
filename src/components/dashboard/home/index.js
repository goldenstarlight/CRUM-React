import React from 'react'
import '../../Subscription/assets/css/bootstrap.min.css'
import '../assets/css/icons.min.css'
import '../assets/css/app.min.css'
import '../assets/css/style.css'
import Logo from '../../NavBar/logo/3.png'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="layout-wrapper">
        <header id="page-topbar">
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box horizontal-logo">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-lg">
                                    <img src={Logo} alt="" height="50" />
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                            id="topnav-hamburger-icon">
                            <span className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        <form className="app-search d-none d-md-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." autoComplete="off"
                                    id="search-options" value="" />
                            </div>
                        </form>
                    </div>

                    <div className="d-flex align-items-center">

                        

                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span className="d-flex align-items-center">
                                    <img className="rounded-circle header-profile-user" src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                                        alt="Header Avatar" />
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                    </span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                
                                <h6 className="dropdown-header">Welcome Anna!</h6>
                                <a className="dropdown-item" href="pages-profile.html"><i
                                        className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Profile</span></a>
                                <a className="dropdown-item" href="apps-chat.html"><i
                                        className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Messages</span></a>
                                <a className="dropdown-item" href="apps-tasks-kanban.html"><i
                                        className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Taskboard</span></a>
                                <a className="dropdown-item" href="pages-faqs.html"><i
                                        className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Help</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="pages-profile.html"><i
                                        className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Balance : <b>$5971.67</b></span></a>
                                <a className="dropdown-item" href="pages-profile-settings.html"><span
                                        className="badge bg-soft-success text-success mt-1 float-end">New</span><i
                                        className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Settings</span></a>
                                <a className="dropdown-item" href="auth-lockscreen-basic.html"><i
                                        className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Lock screen</span></a>
                                <a className="dropdown-item" href="auth-logout-basic.html"><i
                                        className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle" data-key="t-logout">Logout</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="app-menu">
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Customer Management </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Payment</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Team management</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Survey creation</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Survey launch</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="page-content">
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">Dashboard</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mb-3 pb-1">
                    <div className="col-12">
                        <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
                                <p className="text-muted mb-0">Here's what's happening with your store today.</p>
                            </div>
                            <div className="mt-3 mt-lg-0">
                                <form action="javascript:void(0);">
                                    <div className="row g-3 mb-0 align-items-center">
                                        <div className="col-sm-auto">
                                            <div className="input-group">
                                                <input type="text" className="form-control border-0 dash-filter-picker shadow flatpickr-input active" data-provider="flatpickr" data-range-date="true" data-date-format="d M, Y" data-deafult-date="01 Jan 2022 to 31 Jan 2022" readonly="readonly" />
                                                <div className="input-group-text bg-primary border-primary text-white">
                                                    <i className="ri-calendar-2-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-soft-success"><i className="ri-add-circle-line align-middle me-1"></i> Add Product</button>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"><i className="ri-pulse-line"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0"> Total Earnings</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-success fs-14 mb-0">
                                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +16.24 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<span className="counter-value" data-target="559.25">559.25</span>k </h4>
                                        <a href="" className="text-decoration-underline">View net earnings</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-success rounded fs-3">
                                            <i className="bx bx-dollar-circle text-success"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                       
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Orders</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-danger fs-14 mb-0">
                                            <i className="ri-arrow-right-down-line fs-13 align-middle"></i> -3.57 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="36894">36,894</span></h4>
                                        <a href="" className="text-decoration-underline">View all orders</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded fs-3">
                                            <i className="bx bx-shopping-bag text-info"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                       
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Customers</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-success fs-14 mb-0">
                                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i> +29.08 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="183.35">183.35</span>M </h4>
                                        <a href="" className="text-decoration-underline">See details</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-warning rounded fs-3">
                                            <i className="bx bx-user-circle text-warning"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                       
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0"> My Balance</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h5 className="text-muted fs-14 mb-0">
                                            +0.00 %
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                    <div>
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<span className="counter-value" data-target="165.89">165.89</span>k </h4>
                                        <a href="" className="text-decoration-underline">Withdraw money</a>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-primary rounded fs-3">
                                            <i className="bx bx-wallet text-primary"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sell-product">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Best Selling Products</h4>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-semibold text-uppercase fs-12">Sort by:
                                            </span><span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Yesterday</a>
                                            <a className="dropdown-item" href="#">Last 7 Days</a>
                                            <a className="dropdown-item" href="#">Last 30 Days</a>
                                            <a className="dropdown-item" href="#">This Month</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm bg-light rounded p-1 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png" alt="" className="img-fluid d-block"/>
                                                        </div>
                                                        <div>
                                                            <h5 className="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className="text-reset">Branded T-Shirts</a></h5>
                                                            <span className="text-muted">24 Apr 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$29.00</h5>
                                                    <span className="text-muted">Price</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">62</h5>
                                                    <span className="text-muted">Orders</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">510</h5>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$1,798</h5>
                                                    <span className="text-muted">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm bg-light rounded p-1 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png" alt="" className="img-fluid d-block"/>
                                                        </div>
                                                        <div>
                                                            <h5 className="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className="text-reset">Bentwood Chair</a></h5>
                                                            <span className="text-muted">19 Mar 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$85.20</h5>
                                                    <span className="text-muted">Price</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">35</h5>
                                                    <span className="text-muted">Orders</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal"><span className="badge badge-soft-danger">Out of stock</span> </h5>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$2982</h5>
                                                    <span className="text-muted">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm bg-light rounded p-1 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png" alt="" className="img-fluid d-block"/>
                                                        </div>
                                                        <div>
                                                            <h5 className="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className="text-reset">Borosil Paper Cup</a></h5>
                                                            <span className="text-muted">01 Mar 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$14.00</h5>
                                                    <span className="text-muted">Price</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">80</h5>
                                                    <span className="text-muted">Orders</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">749</h5>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$1120</h5>
                                                    <span className="text-muted">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm bg-light rounded p-1 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/products/img-4.png" alt="" className="img-fluid d-block" />
                                                        </div>
                                                        <div>
                                                            <h5 className="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className="text-reset">One Seater Sofa</a></h5>
                                                            <span className="text-muted">11 Feb 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$127.50</h5>
                                                    <span className="text-muted">Price</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">56</h5>
                                                    <span className="text-muted">Orders</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal"><span className="badge badge-soft-danger">Out of stock</span></h5>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$7140</h5>
                                                    <span className="text-muted">Amount</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm bg-light rounded p-1 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/products/img-5.png" alt="" className="img-fluid d-block"/>
                                                        </div>
                                                        <div>
                                                            <h5 className="fs-14 my-1"><a href="apps-ecommerce-product-details.html" className="text-reset">Stillbird Helmet</a></h5>
                                                            <span className="text-muted">17 Jan 2021</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$54</h5>
                                                    <span className="text-muted">Price</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">74</h5>
                                                    <span className="text-muted">Orders</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">805</h5>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 my-1 fw-normal">$3996</h5>
                                                    <span className="text-muted">Amount</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="text-muted">
                                            Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                                        </div>
                                    </div>
                                    <ul className="pagination pagination-separated pagination-sm mb-0">
                                        <li className="page-item disabled">
                                            <a href="#" className="page-link">←</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="#" className="page-link">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">→</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card card-height-100">
                            <div className="card-header align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Top Sellers</h4>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Download Report</a>
                                            <a className="dropdown-item" href="#">Export</a>
                                            <a className="dropdown-item" href="#">Import</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-centered table-hover align-middle table-nowrap mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png" alt="" className="avatar-sm p-2"/>
                                                        </div>
                                                        <div>
                                                            <h5 className="fs-14 my-1 fw-medium">
                                                                <a href="apps-ecommerce-seller-details.html" className="text-reset">iTest Factory</a>
                                                            </h5>
                                                            <span className="text-muted">Oliver Tyler</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Bags and Wallets</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0">8547</p>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">$541200</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 mb-0">32%<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-2.png" alt="" className="avatar-sm p-2" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-14 my-1 fw-medium"><a href="apps-ecommerce-seller-details.html" className="text-reset">Digitech Galaxy</a></h5>
                                                            <span className="text-muted">John Roberts</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Watches</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0">895</p>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">$75030</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 mb-0">79%<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-3.png" alt="" className="avatar-sm p-2" />
                                                        </div>
                                                        <div className="flex-gow-1">
                                                            <h5 className="fs-14 my-1 fw-medium"><a href="apps-ecommerce-seller-details.html" className="text-reset">Nesta Technologies</a></h5>
                                                            <span className="text-muted">Harley Fuller</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Bike Accessories</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0">3470</p>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">$45600</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 mb-0">90%<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-8.png" alt="" className="avatar-sm p-2" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-14 my-1 fw-medium"><a href="apps-ecommerce-seller-details.html" className="text-reset">Zoetic Fashion</a></h5>
                                                            <span className="text-muted">James Bowen</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Clothes</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0">5488</p>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">$29456</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 mb-0">40%<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-5.png" alt="" className="avatar-sm p-2" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-14 my-1 fw-medium">
                                                                <a href="apps-ecommerce-seller-details.html" className="text-reset">Meta4Systems</a>
                                                            </h5>
                                                            <span className="text-muted">Zoe Dennis</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Furniture</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0">4100</p>
                                                    <span className="text-muted">Stock</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">$11260</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 mb-0">57%<i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i></h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="text-muted">
                                            Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                                        </div>
                                    </div>
                                    <ul className="pagination pagination-separated pagination-sm mb-0">
                                        <li className="page-item disabled">
                                            <a href="#" className="page-link">←</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="#" className="page-link">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">→</a>
                                        </li>
                                    </ul>
                                </div>

                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className='row recent-order'>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Recent Orders</h4>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-soft-info btn-sm">
                                        <i className="ri-file-list-3-line align-middle"></i> Generate Report
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                        <thead className="text-muted table-light">
                                            <tr>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Vendor</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2112</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle"/>
                                                        </div>
                                                        <div className="flex-grow-1">Alex Smith</div>
                                                    </div>
                                                </td>
                                                <td>Clothes</td>
                                                <td>
                                                    <span className="text-success">$109.00</span>
                                                </td>
                                                <td>Zoetic Fashion</td>
                                                <td>
                                                    <span className="badge badge-soft-success">Paid</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 fw-medium mb-0">5.0<span className="text-muted fs-11 ms-1">(61 votes)</span></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2111</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">Jansh Brown</div>
                                                    </div>
                                                </td>
                                                <td>Kitchen Storage</td>
                                                <td>
                                                    <span className="text-success">$149.00</span>
                                                </td>
                                                <td>Micro Design</td>
                                                <td>
                                                    <span className="badge badge-soft-warning">Pending</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 fw-medium mb-0">4.5<span className="text-muted fs-11 ms-1">(61 votes)</span></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2109</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg" alt="" className="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">Ayaan Bowen</div>
                                                    </div>
                                                </td>
                                                <td>Bike Accessories</td>
                                                <td>
                                                    <span className="text-success">$215.00</span>
                                                </td>
                                                <td>Nesta Technologies</td>
                                                <td>
                                                    <span className="badge badge-soft-success">Paid</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 fw-medium mb-0">4.9<span className="text-muted fs-11 ms-1">(89 votes)</span></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2108</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-4.jpg" alt="" className="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">Prezy Mark</div>
                                                    </div>
                                                </td>
                                                <td>Furniture</td>
                                                <td>
                                                    <span className="text-success">$199.00</span>
                                                </td>
                                                <td>Syntyce Solutions</td>
                                                <td>
                                                    <span className="badge badge-soft-danger">Unpaid</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 fw-medium mb-0">4.3<span className="text-muted fs-11 ms-1">(47 votes)</span></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2107</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">Vihan Hudda</div>
                                                    </div>
                                                </td>
                                                <td>Bags and Wallets</td>
                                                <td>
                                                    <span className="text-success">$330.00</span>
                                                </td>
                                                <td>iTest Factory</td>
                                                <td>
                                                    <span className="badge badge-soft-success">Paid</span>
                                                </td>
                                                <td>
                                                    <h5 className="fs-14 fw-medium mb-0">4.7<span className="text-muted fs-11 ms-1">(161 votes)</span></h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}

export default Home