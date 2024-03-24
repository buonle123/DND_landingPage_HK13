import type { NextPage } from "next";
import styles from "./data-flow-controller.module.css";

const DataFlowController: NextPage = () => {
  return (
    <section className={styles.dataFlowController}>
      <div className={styles.debuggerControllerParent}>
        <div className={styles.debuggerController}>
          <div className={styles.listManager}>
            <h2 className={styles.quickLinks}>Quick Links</h2>
            <div className={styles.aboutCoursesCategoryContainer}>
              <p className={styles.about}>About</p>
              <p className={styles.courses}>Courses</p>
              <p className={styles.category}>Category</p>
              <p className={styles.blog}>Blog</p>
            </div>
          </div>
        </div>
        <div className={styles.debuggerController1}>
          <div className={styles.legalInfoParent}>
            <h2 className={styles.legalInfo}>Legal info</h2>
            <div className={styles.shortTermLoansContainer}>
              <p className={styles.shortTermLoans}>Short Term Loans</p>
              <p className={styles.paydayLoans}>Payday Loans</p>
              <p className={styles.badCreditLoans}>Bad Credit Loans</p>
            </div>
          </div>
        </div>
        <div className={styles.iterationHandler}>
          <h2 className={styles.signup}>Signup</h2>
          <h3 className={styles.signupAsAContainer}>
            <p className={styles.signupAsAInstructor}>
              {`Signup as a `}
              <span className={styles.instructor}>Instructor</span>
            </p>
            <p className={styles.signupAsAStudent}>
              {`Signup as a `}
              <span className={styles.student}>student</span>
            </p>
            <p className={styles.signin}>Signin</p>
          </h3>
        </div>
        <div className={styles.stringManipulator}>
          <div className={styles.expressionResolver}>
            <h2 className={styles.contactUs}>Contact Us</h2>
          </div>
          <div className={styles.eventDispatcher}>
            <div className={styles.componentLinker}>
              <img
                className={styles.phoneIcon1}
                alt=""
                src="/8666632-phone-icon-1.svg"
              />
              <div className={styles.div}>0367.460.640</div>
            </div>
            <div className={styles.graphBuilder}>
              <div className={styles.outputGenerator}>
                <img
                  className={styles.outputGeneratorChild}
                  alt=""
                  src="/group-13186.svg"
                />
              </div>
              <div className={styles.soobinnghigmailcom}>
                soobinnghi@gmail.com
              </div>
            </div>
            <div className={styles.connectionBuilder}>
              <img
                className={styles.addressLocationMapNavigatioIcon}
                alt=""
                src="/4200473-address-location-map-navigation-icon-1.svg"
              />
              <div className={styles.phungChiKien}>
                106 Phung Chi Kien, Da Nang
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlowController;
