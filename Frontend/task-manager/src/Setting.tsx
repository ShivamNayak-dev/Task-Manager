import React, { useState } from 'react';
import { User, Mail, Lock, Palette, LogOut, Save } from 'lucide-react';

interface SettingsProps {
  onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onLogout }) => {
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSaveProfile = () => {
    console.log('Saving profile...');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    console.log('Changing password...');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="h-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </div>

      <div className="space-y-8">
        {/* Profile Management */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">Profile Management</h2>
              <p className="text-slate-400 text-sm">Update your personal information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[44px]"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[44px]"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSaveProfile}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-medium min-h-[44px]"
            >
              <Save size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        {/* Password Change */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Lock size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">Change Password</h2>
              <p className="text-slate-400 text-sm">Update your account password</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[44px]"
                placeholder="Enter current password"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[44px]"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all min-h-[44px]"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleChangePassword}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-medium min-h-[44px]"
            >
              <Lock size={16} />
              <span>Update Password</span>
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Palette size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">Preferences</h2>
              <p className="text-slate-400 text-sm">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Dark Mode</h3>
                <p className="text-slate-400 text-sm">Use dark theme across the application</p>
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                  isDarkMode ? 'bg-teal-600' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">Sign Out</h2>
              <p className="text-slate-400 text-sm">Sign out of your TaskFlow account</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-medium min-h-[44px]"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;