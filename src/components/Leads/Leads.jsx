import React, { useEffect, useRef, useState } from 'react';
import './Leads.css'
import BtnArrow from "../../assets/images/btn-arr.svg";
import YellowCircle from '../../assets/images/Yellow-circle.png';

const AnimatedCounter = ({ targetValue, durationMs = 1500, prefix = '', suffix = '', decimals = 0, startOnView = true }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef(null);
  const startTimeRef = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsedMs = timestamp - startTimeRef.current;
      const progress = Math.min(elapsedMs / durationMs, 1);
      const currentValue = targetValue * progress;
      setDisplayValue(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      frameRef.current = requestAnimationFrame(animate);
    };

    if (startOnView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      startAnimation();
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [durationMs, startOnView, targetValue]);

  const formatValue = () => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(displayValue * factor) / factor;
    return `${prefix}${rounded.toFixed(decimals)}${suffix}`;
  };

  return (
    <span ref={containerRef}>{formatValue()}</span>
  );
};

const Leads = () => {
  return (
  <>
    <section className="leads-hero-section"> 
      <div className="container position-relative">
      <img src={YellowCircle} className="yellow-circle position-absolute" />
        <div className="leads-container">
          <div className="row align-items-center g-4">
            {/* Left content */}
            <div className="col-lg-5">
              <div className="leads-content">
                <h1 className="main-h2 text-white leads-title mb-4">Get leads from LinkedIn</h1>
                <p className="text-light mb-4">
                  Seize the power of the largest professional network with Leadassist.
                </p>
                <a
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call <img src={BtnArrow} alt="Arrow" />
                </a>
              </div>
            </div>
            
            {/* Right stats */}
            <div className="col-lg-7">
              <div className="stats-grid d-flex justify-content-between">
                <div className="stat-item d-flex flex-column align-items-center">
                  <div className="stat-number">
                    <AnimatedCounter targetValue={200} suffix="+" />
                  </div>
                  <div className="stat-label">new opportunities yearly</div>
                </div>
                <div className="stat-item d-flex flex-column align-items-center">
                  <div className="stat-number">
                    <AnimatedCounter targetValue={15} suffix="%" />
                  </div>
                  <div className="stat-label">deal closing rate</div>
                </div>
                <div className="stat-item d-flex flex-column align-items-center">
                  <div className="stat-number">
                    <AnimatedCounter targetValue={10} suffix=":1" />
                  </div>
                  <div className="stat-label">ROI achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Leads;