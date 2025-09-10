"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Eye, EyeOff, LogIn, UserPlus } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, type: "login" | "signup") => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-deepBlack/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // ✅ Main fix: modal bounded inside viewport + scrollable
            className="bg-deepBlack/90 border border-electricRed/20 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (Sticky for better UX) */}
            <div className="flex justify-between items-center p-6 border-b border-electricRed/20 sticky top-0 bg-deepBlack/90 z-10">
              <h2 className="text-2xl font-graduate text-electricRed">
                Welcome to V's Gym
              </h2>
              <button
                onClick={onClose}
                className="text-lightGrey hover:text-electricRed transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="p-6 space-y-6"
            >
              <TabsList className="grid grid-cols-2 mb-6 bg-deepBlack/50 border border-electricRed/20">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-electricRed data-[state=active]:text-deepBlack font-kodeMono"
                >
                  <LogIn size={16} className="mr-2" />
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-electricRed data-[state=active]:text-deepBlack font-kodeMono"
                >
                  <UserPlus size={16} className="mr-2" />
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={(e) => handleSubmit(e, "login")}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="login-email"
                      className="text-lightGrey font-kodeMono"
                    >
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="login-password"
                      className="text-lightGrey font-kodeMono"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGrey/60 hover:text-electricRed"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-electricRed/20 text-electricRed focus:ring-electricRed"
                      />
                      <span className="text-sm text-lightGrey font-kodeMono">
                        Remember me
                      </span>
                    </label>

                    <button
                      type="button"
                      className="text-sm text-electricRed hover:text-amberYellow font-kodeMono"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-electricRed hover:bg-electricRed/90 text-deepBlack font-graduate font-bold"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </motion.form>
              </TabsContent>

              {/* Signup Form */}
              <TabsContent value="signup">
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={(e) => handleSubmit(e, "signup")}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="signup-firstname"
                        className="text-lightGrey font-kodeMono"
                      >
                        First Name
                      </Label>
                      <Input
                        id="signup-firstname"
                        type="text"
                        placeholder="First name"
                        className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="signup-lastname"
                        className="text-lightGrey font-kodeMono"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="signup-lastname"
                        type="text"
                        placeholder="Last name"
                        className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="signup-email"
                      className="text-lightGrey font-kodeMono"
                    >
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="signup-password"
                      className="text-lightGrey font-kodeMono"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGrey/60 hover:text-electricRed"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="signup-confirm"
                      className="text-lightGrey font-kodeMono"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      id="signup-confirm"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="bg-deepBlack/50 border-electricRed/20 focus:border-electricRed"
                      required
                    />
                  </div>

                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-electricRed/20 text-electricRed focus:ring-electricRed"
                      required
                    />
                    <span className="text-sm text-lightGrey font-kodeMono">
                      I agree to the Terms of Service and Privacy Policy
                    </span>
                  </label>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-amberYellow hover:bg-amberYellow/90 text-deepBlack font-graduate font-bold"
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </motion.form>
              </TabsContent>
            </Tabs>

            {/* Social Login Divider */}
            <div className="px-6 pb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-electricRed/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-deepBlack/90 text-lightGrey font-kodeMono">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <Button
                  variant="outline"
                  className="bg-deepBlack/50 border-electricRed/20 hover:bg-electricRed/10 hover:border-electricRed font-kodeMono"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="bg-deepBlack/50 border-electricRed/20 hover:bg-electricRed/10 hover:border-electricRed font-kodeMono"
                >
                  Facebook
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
