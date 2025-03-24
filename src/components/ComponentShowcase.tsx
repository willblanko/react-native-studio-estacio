
import { useState, useEffect, useRef } from 'react';

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('view');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ComponentTab = ({ name }: { name: string }) => (
    <button
      className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        activeTab === name
          ? 'bg-brand-100 text-brand-600'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={() => setActiveTab(name)}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );

  return (
    <section ref={sectionRef} className="py-20 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Componentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Biblioteca de componentes React Native
          </h2>
          <p className="text-gray-600">
            Explore os componentes fundamentais do React Native e aprenda como utilizá-los 
            em seus projetos através de exemplos práticos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <ComponentTab name="view" />
          <ComponentTab name="text" />
          <ComponentTab name="image" />
          <ComponentTab name="button" />
          <ComponentTab name="input" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 overflow-hidden">
            <div className="mobile-screen mx-auto scale-[0.8] origin-top">
              {activeTab === 'view' && (
                <div className="h-full w-full bg-white p-4">
                  <div className="h-full w-full bg-brand-100 rounded-xl flex items-center justify-center">
                    <p className="text-brand-600 font-medium">View Component</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'text' && (
                <div className="h-full w-full bg-white p-8 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold">Heading Text</h3>
                  <p className="text-base">Regular paragraph text</p>
                  <p className="text-sm text-gray-500">Small caption text</p>
                  <p className="font-mono">Monospace text</p>
                  <p className="italic">Italic text</p>
                  <p className="text-brand-500 font-bold">Colored bold text</p>
                </div>
              )}
              
              {activeTab === 'image' && (
                <div className="h-full w-full bg-white p-4 flex flex-col gap-4">
                  <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/2 h-32 bg-gray-200 rounded-xl"></div>
                    <div className="w-1/2 h-32 bg-gray-200 rounded-xl"></div>
                  </div>
                </div>
              )}
              
              {activeTab === 'button' && (
                <div className="h-full w-full bg-white p-8 flex flex-col gap-6 justify-center">
                  <div className="h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium">Primary Button</p>
                  </div>
                  <div className="h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-800 font-medium">Secondary Button</p>
                  </div>
                  <div className="h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium">Dark Button</p>
                  </div>
                  <div className="h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium">Danger Button</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'input' && (
                <div className="h-full w-full bg-white p-8 flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <div className="h-12 border border-gray-300 rounded-lg px-4 flex items-center">
                      <div className="w-full h-5 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="h-12 border border-gray-300 rounded-lg px-4 flex items-center">
                      <div className="w-full h-5 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="h-12 border border-gray-300 rounded-lg px-4 flex items-center">
                      <div className="w-3/4 h-5 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                    <p className="text-white font-medium">Submit</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-2xl p-6 text-white h-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400 font-mono">
                  {activeTab === 'view' && 'ViewExample.tsx'}
                  {activeTab === 'text' && 'TextExample.tsx'}
                  {activeTab === 'image' && 'ImageExample.tsx'}
                  {activeTab === 'button' && 'ButtonExample.tsx'}
                  {activeTab === 'input' && 'InputExample.tsx'}
                </div>
              </div>
              
              <div className="font-mono text-sm text-gray-200 overflow-x-auto">
                {activeTab === 'view' && (
                  <pre>{`import React from 'react';
import { View, StyleSheet } from 'react-native';

const ViewExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>View Component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3B82F6',
    fontWeight: '500',
  },
});

export default ViewExample;`}</pre>
                )}
                
                {activeTab === 'text' && (
                  <pre>{`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heading Text</Text>
      <Text style={styles.paragraph}>Regular paragraph text</Text>
      <Text style={styles.caption}>Small caption text</Text>
      <Text style={styles.monospace}>Monospace text</Text>
      <Text style={styles.italic}>Italic text</Text>
      <Text style={styles.coloredBold}>Colored bold text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: '#6B7280',
  },
  monospace: {
    fontFamily: 'monospace',
  },
  italic: {
    fontStyle: 'italic',
  },
  coloredBold: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
});

export default TextExample;`}</pre>
                )}
                
                {activeTab === 'image' && (
                  <pre>{`import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageExample = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/600/400' }}
        style={styles.mainImage}
        resizeMode="cover"
      />
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://picsum.photos/300/300' }}
          style={styles.smallImage}
          resizeMode="cover"
        />
        <Image
          source={{ uri: 'https://picsum.photos/301/301' }}
          style={styles.smallImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  smallImage: {
    flex: 1,
    height: 120,
    borderRadius: 12,
  },
});

export default ImageExample;`}</pre>
                )}
                
                {activeTab === 'button' && (
                  <pre>{`import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonExample = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.primaryButton} onPress={() => alert('Primary button pressed')}>
        <Text style={styles.primaryButtonText}>Primary Button</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.secondaryButton} onPress={() => alert('Secondary button pressed')}>
        <Text style={styles.secondaryButtonText}>Secondary Button</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.darkButton} onPress={() => alert('Dark button pressed')}>
        <Text style={styles.darkButtonText}>Dark Button</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.dangerButton} onPress={() => alert('Danger button pressed')}>
        <Text style={styles.dangerButtonText}>Danger Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 24,
  },
  primaryButton: {
    height: 48,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  secondaryButton: {
    height: 48,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1F2937',
    fontWeight: '500',
  },
  darkButton: {
    height: 48,
    backgroundColor: '#1F2937',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  dangerButton: {
    height: 48,
    backgroundColor: '#EF4444',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dangerButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default ButtonExample;`}</pre>
                )}
                
                {activeTab === 'input' && (
                  <pre>{`import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputExample = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    alert(JSON.stringify({ username, email, password }, null, 2));
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 24,
  },
  inputGroup: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  submitButton: {
    height: 48,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default InputExample;`}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
