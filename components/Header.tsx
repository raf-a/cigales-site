import React, {
  HTMLProps,
  FC,
  useState,
  VFC,
  MouseEvent,
  ReactNode,
} from "react";
import Link from "next/link";
import { Document } from "@prismicio/client/types/documents";
import { useLockBodyScroll, useMedia, useToggle } from "react-use";
import DiscoverMenu from "./DiscoverMenu";
import Footer from "./Footer";
import { FiChevronDown } from "react-icons/fi";
import classNames from "classnames";
import Container from "./Container";
import PrismicLink from "./PrismicLink";
import { RichText } from "prismic-reactjs";

const Logo = () => (
  <Link href="/">
    <a>
      <svg
        width="124"
        height="75"
        viewBox="0 0 124 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M109.679 54.3822C109.33 53.5266 109.33 52.5285 109.359 52.0437C109.417 51.7586 109.562 51.616 109.795 51.616C110.377 51.616 112.444 54.097 116.403 54.097C118.906 54.097 120.361 52.7852 120.361 50.9886C120.361 46.3974 109.446 48.308 109.446 41.4924C109.446 37.9278 112.852 35.4753 117.072 35.4753C121.089 35.4753 122.923 37.5285 122.923 38.0133C122.923 38.4981 121.991 39.7529 121.497 39.7529C120.885 39.7529 119.896 38.3555 117.13 38.3555C114.54 38.3555 112.997 39.3821 112.997 41.2643C112.997 45.884 123.942 43.7167 123.942 50.6464C123.942 54.4962 121.031 57.1198 116.461 57.1198C112.793 57.1198 109.912 55.1521 109.679 54.3822ZM91.5736 56.0647V36.5304C91.5736 36.0171 91.8356 35.789 92.3887 35.789H103.566C104.701 35.789 105.022 36.7586 105.022 38.8688C105.022 39.211 104.847 39.3536 104.643 39.3536C104.265 39.3536 102.897 38.6977 99.2581 38.6977H95.445C95.1539 38.6977 95.0375 38.8688 95.0375 39.097V44.3156C95.0375 44.5437 95.1539 44.7434 95.3868 44.7434H102.198C102.518 44.7434 102.751 45.0285 102.751 46.2833C102.751 47.538 102.518 47.7947 102.198 47.7947H95.3868C95.1539 47.7947 95.0375 48.1084 95.0375 48.3365V53.5266C95.0375 53.8118 95.1539 53.9259 95.445 53.9259H99.8694C103.537 53.9259 105.167 53.27 105.545 53.27C105.778 53.27 105.895 53.4411 105.895 53.7833C105.895 55.8936 105.604 56.8631 104.439 56.8631H92.3887C91.8065 56.8346 91.5736 56.578 91.5736 56.0647ZM74.3999 56.2358V36.2738C74.3999 35.9601 74.691 35.7319 76.1755 35.7319C77.6018 35.7319 77.922 35.9601 77.922 36.2738V53.3841C77.922 53.6692 78.0384 53.7833 78.3295 53.7833H81.0075C85.4028 53.7833 87.1783 53.1274 87.5567 53.1274C87.7896 53.1274 87.9352 53.27 87.9352 53.6407C87.9352 55.751 87.615 56.8061 86.4798 56.8061H74.9821C74.6328 56.8346 74.3999 56.635 74.3999 56.2358ZM56.7605 52.6426C56.5276 52.6426 56.3239 52.6996 56.2075 52.9563L54.9558 56.2928C54.7521 56.692 54.461 56.8346 53.0056 56.8346C51.4046 56.8346 51.1718 56.6635 51.2009 56.4069C51.2009 56.1787 51.3755 55.808 51.4629 55.5228L58.8563 36.5875C59.1183 35.9601 59.4967 35.7605 60.9812 35.7605C62.4948 35.7605 62.8732 35.9601 63.106 36.5875L70.4995 55.5228C70.5868 55.808 70.7614 56.1787 70.7614 56.4069C70.7906 56.692 70.5868 56.8346 68.9859 56.8346C67.4722 56.8346 67.1812 56.7206 67.0356 56.2928L65.7549 52.9563C65.6675 52.6996 65.4347 52.6426 65.2018 52.6426H56.7605ZM64.1539 49.8764C64.4159 49.8764 64.4741 49.6768 64.4741 49.5057L61.3013 41.0361C61.2431 40.865 61.1267 40.6369 60.9812 40.6369C60.8065 40.6369 60.7192 40.8935 60.661 41.0076L57.4882 49.5057C57.4882 49.7339 57.5464 49.8764 57.8084 49.8764H64.1539ZM30.3596 46.5114C30.3596 39.3536 35.4244 35.4753 41.3333 35.4753C45.6995 35.4753 47.8535 37.557 47.8535 38.1274C47.8535 38.6692 46.8929 39.9525 46.4272 39.9525C45.7868 39.9525 44.8844 38.6692 41.4788 38.6692C37.5492 38.6692 34.0563 40.9791 34.0563 46.597C34.0563 52.0723 37.2582 54.097 41.0131 54.097C44.0403 54.097 45.1755 52.5571 45.1755 51.9012V47.0818C45.1755 46.5399 47.5333 45.9411 48.0863 45.9411C48.5229 45.9411 48.7267 46.1407 48.7267 46.5685V52.8993C48.7267 53.7548 46.369 57.1483 40.7802 57.1483C35.2497 57.1198 30.3596 53.9544 30.3596 46.5114ZM22.5586 56.2928V36.2738C22.5586 35.9601 22.8497 35.7319 24.3342 35.7319C25.7605 35.7319 26.0807 35.9601 26.0807 36.2738V56.2928C26.0807 56.578 25.7605 56.8346 24.3342 56.8346C22.8497 56.8346 22.5586 56.635 22.5586 56.2928ZM0.0290527 46.5685C0.0290527 39.3536 5.35581 35.4468 11.0028 35.4468C15.369 35.4468 17.261 37.443 17.261 37.9563C17.261 38.4696 16.3295 39.7529 15.8929 39.7529C15.2816 39.7529 14.4084 38.6122 11.1774 38.6122C7.42248 38.6122 3.8422 41.1217 3.8422 46.4829C3.8422 52.0152 7.53891 53.8974 11.5558 53.8974C15.5727 53.8974 17.5812 51.8441 18.1342 51.8441C18.3962 51.8441 18.4835 51.9582 18.4835 52.2434C18.4835 52.7567 18.3671 53.5266 17.9014 54.4677C17.5812 55.1806 14.6122 57.0628 11.0319 57.0628C5.47224 57.1198 0.0290527 53.8403 0.0290527 46.5685Z"
          fill="#279989"
        />
        <path
          d="M91.7484 67.8992H95.969V69.0114H93.1747V70.7224H95.7362V71.806H93.1747V73.7737H95.969V74.8574H91.7484V67.8992ZM90.7005 74.7718C90.1765 74.8859 89.6235 74.9999 89.0704 74.9999C86.7709 74.9999 85.17 73.8593 85.17 71.5209C85.17 69.1254 86.6545 67.7851 89.0704 67.7851C89.5362 67.7851 90.1474 67.8707 90.6714 68.0703L90.584 69.2395C90.031 68.9543 89.5653 68.8688 89.0413 68.8688C87.5859 68.8688 86.6545 69.9809 86.6545 71.4068C86.6545 72.8326 87.5568 73.8878 89.0704 73.8878C89.6235 73.8878 90.293 73.7737 90.6423 73.6026L90.7005 74.7718ZM78.0967 67.8992H79.8723L82.5793 73.1178V67.8992H83.9474V74.8574H82.2009L79.4939 69.6672H79.4648V74.8574H78.0967V67.8992ZM72.8573 67.8992H74.4582L77.2526 74.8574H75.6807L75.0695 73.2604H72.1878L71.5765 74.8574H70.092L72.8573 67.8992ZM73.6432 69.2965L72.5953 72.1768H74.662L73.6432 69.2965ZM64.4742 67.8992H66.0169C67.5596 67.8992 69.3643 67.8421 69.3643 69.7813C69.3643 70.6083 68.8113 71.2927 67.9089 71.4068V71.4353C68.2873 71.4638 68.5202 71.8345 68.6657 72.1482L69.8009 74.8859H68.2L67.3559 72.7186C67.1521 72.2053 66.9775 72.0057 66.3662 72.0057H65.9005V74.9144H64.4742V67.8992ZM65.9005 70.865H66.3662C67.0648 70.865 67.8798 70.7794 67.8798 69.8954C67.8798 69.0684 67.0939 68.9828 66.3662 68.9828H65.9005V70.865ZM59.4967 67.8992H63.4554V69.0114H60.923V70.7224H63.339V71.806H60.923V74.8574H59.4967V67.8992ZM55.6545 71.6349H58.3324V72.7186H55.6545V71.6349ZM50.4441 67.8992H54.6357V69.0114H51.8704V70.7224H54.4028V71.806H51.8704V73.7737H54.6648V74.8574H50.4441V67.8992ZM43.0798 67.8992H45.03C47.2131 67.8992 49.1343 68.6121 49.1343 71.3783C49.1343 74.1444 47.2131 74.8574 45.03 74.8574H43.0798V67.8992ZM44.5061 73.7737H45.292C46.4854 73.7737 47.6498 72.9182 47.6498 71.3783C47.6498 69.8669 46.4854 68.9828 45.292 68.9828H44.5061V73.7737ZM39.2375 71.6349H41.9155V72.7186H39.2375V71.6349ZM34.0272 67.8992H38.2188V69.0114H35.4535V70.7224H37.9859V71.806H35.4535V73.7737H38.2479V74.8574H34.0272V67.8992ZM28.9333 67.8992H30.3596V73.7737H33.1249V74.8574H28.9333V67.8992ZM25.9934 67.8992H27.4197V74.8574H25.9934V67.8992ZM68.0836 5.64633C68.4038 4.22047 68.5784 2.7661 68.5784 1.25469C68.5784 0.712866 68.1127 0.256592 67.5596 0.256592C65.2019 0.256592 62.9314 0.655831 60.8066 1.36876C58.6817 0.655831 56.4113 0.256592 54.0244 0.256592C53.4422 0.256592 53.0056 0.712866 53.0056 1.25469C53.0056 2.7661 53.1803 4.22047 53.5005 5.64633C49.3962 9.35355 46.8347 14.6577 46.8347 20.5323C46.8347 20.7889 46.9512 21.0456 47.1258 21.2452C47.3296 21.4448 47.5915 21.5304 47.8535 21.5304C52.7437 21.5304 57.2263 19.8764 60.7775 17.0817C64.3286 19.8764 68.8113 21.5304 73.6723 21.5304C74.2545 21.5304 74.6911 21.0741 74.6911 20.5323C74.7202 14.6577 72.1587 9.35355 68.0836 5.64633ZM66.4826 2.30982C66.4535 2.9372 66.3662 3.56458 66.2789 4.19195C65.493 3.62161 64.6488 3.1083 63.7756 2.65203C64.6488 2.48093 65.5512 2.36686 66.4826 2.30982ZM55.8 6.35925C57.2845 5.19005 58.9728 4.22047 60.8066 3.53606C62.6404 4.22047 64.2995 5.19005 65.784 6.38777C64.8526 9.52465 63.1061 12.2908 60.7775 14.4866C58.4488 12.2623 56.7023 9.46762 55.8 6.35925ZM55.1014 2.30982C56.0329 2.36686 56.9352 2.48093 57.8084 2.65203C56.9352 3.1083 56.0911 3.62161 55.3052 4.19195C55.2178 3.56458 55.1305 2.9372 55.1014 2.30982ZM48.9305 19.4771C49.1925 14.9429 51.1136 10.865 54.1408 7.84214C55.1887 10.865 56.9643 13.5456 59.2347 15.7414C56.353 17.9087 52.8019 19.2775 48.9305 19.4771ZM62.3202 15.7414C64.5906 13.5456 66.3662 10.865 67.4432 7.84214C70.4413 10.8935 72.3624 14.9714 72.6244 19.4771C68.753 19.2775 65.2019 17.9087 62.3202 15.7414Z"
          fill="#74AA50"
        />
      </svg>
      <style jsx>{`
        a {
          line-height: 0;
        }
      `}</style>
    </a>
  </Link>
);

const MenuButton: FC<
  {
    caret?: boolean;
    primary?: boolean;
    hover?: boolean;
  } & HTMLProps<HTMLAnchorElement>
> = ({ caret, primary, hover, children, ...props }) => {
  return (
    <>
      <a {...props} className={classNames(props.className, { hover })}>
        {children}
        {caret && (
          <div className="caret">
            <FiChevronDown />
          </div>
        )}
      </a>
      <style jsx>{`
        a {
          display: inline-block;
          margin-left: auto;
          font-weight: 600;
          line-height: 1.25rem;
          padding: 0.75rem 1rem;
          border-radius: 1.375rem;
          cursor: pointer;
          background-color: ${primary ? "var(--color-primary)" : "transparent"};
          color: ${primary ? "var(--color-bg)" : "var(--color-primary)"};
        }
        a:hover,
        a.hover {
          text-decoration: none;
          background-color: ${primary
            ? "var(--color-text2)"
            : "var(--color-bg2)"};
          color: ${primary ? "var(--color-bg)" : "var(--color-primary)"};
        }
        .caret {
          display: inline;
          vertical-align: middle;
          margin-left: 0.2em;
          color: var(--color-secondary);
          line-height: 0;
        }
      `}</style>
    </>
  );
};

const MegaMenu: FC<{ button: ReactNode }> = ({ button, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton
        href="#"
        onClick={(e) => e.preventDefault()}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        caret
        hover={open}
      >
        {button}
      </MenuButton>
      {open && (
        <>
          <div className="overlay"></div>
          <div
            className="menu"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Container>{children}</Container>
          </div>
        </>
      )}
      <style jsx>{`
        .overlay {
          pointer-events: none;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          z-index: -1;
          background-color: var(--color-bg2-light);
          height: 105px;
        }
        .menu {
          position: absolute;
          left: 0;
          right: 0;
          z-index: 1;
          background-color: var(--color-bg2-light);
          padding: 60px 0 30px;
          box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

const DropdownMenu: FC<{ button: ReactNode }> = ({ button, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="root">
      <MenuButton
        href="#"
        onClick={(e) => e.preventDefault()}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        caret
        hover={open}
      >
        {button}
      </MenuButton>
      {open && (
        <div
          className="menu"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="menu-content">{children}</div>
        </div>
      )}
      <style jsx>{`
        .root {
          display: inline-block;
        }
        .menu {
          position: absolute;
          z-index: 1;
          padding-top: 0.25rem;
        }
        .menu-content {
          background-color: var(--color-bg2);
          border-radius: 1.375rem;
          padding: 1rem;
          width: 200px;
          box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
        }
        .menu-content :global(p) {
          margin: 0;
        }
        .menu-content :global(p + p) {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

const HeaderLayout: FC = ({ children }) => (
  <header>
    <div className="logo">
      <Logo />
    </div>
    {children}
    <style jsx>{`
      header {
        padding: 15px 20px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: flex-start;
        justify-items: flex-end;
      }
      .logo {
        justify-self: flex-start;
        z-index: 2;
      }
      @media (min-width: 1024px) {
        header {
          grid-template-columns: 1fr auto 1fr;
        }
      }
    `}</style>
  </header>
);

const Header: VFC<{ homepageDoc: Document }> = ({ homepageDoc }) => {
  const isDesktop = useMedia("(min-width: 1024px)");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  useLockBodyScroll(mobileMenu);

  const MobileMenuButton = () => (
    <MenuButton href="#" onClick={() => setMobileMenu(!mobileMenu)} primary>
      Menu
    </MenuButton>
  );

  if (mobileMenu) {
    return (
      <div className="root">
        <HeaderLayout>
          <MobileMenuButton />
        </HeaderLayout>
        <div className="content">
          <DiscoverMenu homepageDoc={homepageDoc} />
          <Footer homepageDoc={homepageDoc} />
        </div>
        <style jsx>{`
          .root {
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: var(--color-bg2);
            color: var(--color-text2);
          }
          .content {
            padding: 15px 20px;
            grid-template-columns: 1fr;
            display: grid;
            row-gap: 30px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <HeaderLayout>
        {isDesktop ? (
          <>
            <div>
              <DropdownMenu button="Découvrir">
                {homepageDoc.data.discover_menu
                  .concat(homepageDoc.data.discover_menu_extra)
                  .map((item: any, i: number) => (
                    <p key={i}>
                      <PrismicLink link={item.link}>
                        <a>{RichText.asText(item.title)}</a>
                      </PrismicLink>
                    </p>
                  ))}
              </DropdownMenu>
              <DropdownMenu button="Ressources">
                {homepageDoc.data.resources_menu.map((item: any, i: number) => (
                  <p key={i}>
                    <PrismicLink link={item.link}>
                      <a>{RichText.asText(item.title)}</a>
                    </PrismicLink>
                  </p>
                ))}
              </DropdownMenu>
              <Link href="/contact" passHref>
                <MenuButton>Contact</MenuButton>
              </Link>
            </div>
            <div>
              <MenuButton href="https://bap.cigales-idf.asso.fr" primary>
                Espace membres
              </MenuButton>
            </div>
          </>
        ) : (
          <MobileMenuButton />
        )}
      </HeaderLayout>
      {mobileMenu}
    </>
  );
};

export default Header;
