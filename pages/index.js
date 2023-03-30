import Head from 'next/head';
import Image from 'next/image';
import banner from "../public/bammer.svg";
import four from "../public/four.webp";
import newwork from "../public/newwork.webp";
import one from "../public/one.webp";
import three from "../public/three.webp";
import two from "../public/two.webp";


export default function Home() {
  return (
    <main className=''>
      <Head>
        <title>Bloging 2.0</title>
        <meta name="Bloging web app" content="Bloging 2.0" />
      </Head>

      <section className='main'>
        <div className='container'>

          <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-6 banertext'>
              <h1>We Make<br /> Cloud Computing<br /> More Easier</h1>
              <p>
                Ensure accessibility by using a  element or, if using a more generic element such as add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
              </p>
              <button>Explore Our Servises</button>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6 banner'>
              <Image className='ml-5' height={400} src={banner} alt="banner" />
            </div>

          </div>


        </div>
        <svg className='sbg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L21.8,272C43.6,256,87,224,131,202.7C174.5,181,218,171,262,144C305.5,117,349,75,393,69.3C436.4,64,480,96,524,112C567.3,128,611,128,655,117.3C698.2,107,742,85,785,69.3C829.1,53,873,43,916,64C960,85,1004,139,1047,170.7C1090.9,203,1135,213,1178,197.3C1221.8,181,1265,139,1309,106.7C1352.7,75,1396,53,1418,42.7L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
      </section>

      <section className='container secsection'>
        <div>
          <div>
            <Image className='logoImage' src={one} alt="one" />
          </div>
          <div>
            <Image className='logoImage' src={two} alt="one" />
          </div>
          <div>
            <Image className='logoImage' src={three} alt="one" />
          </div>
          <div>
            <Image className='logoImage' src={four} alt="one" />
          </div>
        </div>
        <div className='markwiens'>
          <div>
            <h3>MARK WIENS</h3>
            <span>Windows Inc.</span>
          </div>
          <div>
            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off as “boys will be boys,”</p>
          </div>
        </div>
      </section>







      <section className='container'>
        <div className='prigingheadeer'>
          <h1>Choose the Perfect Plan for you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className='row pricignWrper'>
          <div class="row mt-5">
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h4 class="my-0 font-weight-normal">Basic</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$19<small class="text-muted">/mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>1 User</li>
                    <li>10 GB Storage</li>
                    <li>Email Support</li>
                    <li>Help Center Access</li> <li>Unlimited Users</li>
                    <li>50 GB Storage</li>
                    <li>Priority Email Support</li>
                    <li>Help Center Access</li>
                  </ul>
                  <button type="button" class="btn">Sign up for free</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h4 class="my-0 font-weight-normal">Pro</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$29<small class="text-muted">/mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>5 Users</li>
                    <li>20 GB Storage</li>
                    <li>Email Support</li>
                    <li>Help Center Access</li>
                    <li>Unlimited Users</li>
                    <li>50 GB Storage</li>
                    <li>Priority Email Support</li>
                    <li>Help Center Access</li>
                  </ul>
                  <button type="button" class="btn">Get started</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h4 class="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$49<small class="text-muted">/mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Unlimited Users</li>
                    <li>50 GB Storage</li>
                    <li>Priority Email Support</li>
                    <li>Help Center Access</li>
                    <li>Unlimited Users</li>
                    <li>50 GB Storage</li>
                    <li>Priority Email Support</li>
                    <li>Help Center Access</li>
                  </ul>
                  <button type="button" class="btn ">Contact us</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>















      <section className='container mt-5 mb-5 hh'>
        <div className="row">
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <h1>We Believe that Interior beautifies the</h1>
            <p className='text-muted'>
              nappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that.
            </p>
            <button>See Detailes</button>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <Image width={520} src={newwork} alt="newwork" />
          </div>
        </div>
      </section>








      <section className='fututes'>

        <div className='prigingheadeer'>
          <h1>Features That make us Unique</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className='container mt-5 mb-5 futuresImtem'>
          <div>
            <div className=''>
              <h1>5962</h1>
              <span>Projects Completed</span>
            </div>
            <div>
              <h5>Are your Templates responsive?</h5>
              <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
            </div>
          </div>





          <div>
            <div className=''>
              <h1>2394</h1>
              <span>New Projects</span>
            </div>
            <div>
              <h5>Does it have all the plugin as mentioned?</h5>
              <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
            </div>
          </div>





          <div>
            <div className=''>
              <h1>1439</h1>
              <span>Tickets Submitted</span>
            </div>
            <div>
              <h5>Can i use the these theme for my client?</h5>
              <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
            </div>
          </div>



          <div>
            <div className=''>
              <h1>9335</h1>
              <span>Cup of Coffee</span>
            </div>
            <div>
              <h5>Are your Templates responsive?</h5>
              <p>“Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.</p>
            </div>
          </div>




        </div>

      </section>













      <section className='text-center lokking'>

        <div className='container'>
          <h1>Looking for a Custom sulations</h1>
          <p>
            “Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.
          </p>
          <button>Request for free consultration</button>
        </div>

      </section>




    </main >
  )
}


